import type { User as ClerkUser, UserJSON } from '@clerk/nextjs/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { Prisma } from '@/app/generated/prisma/client'

import prisma from '@/lib/prisma'

type SyncableClerkUser = {
  clerkId: string
  email: string
  name: string | null
  imageUrl: string | null
  emailVerified: Date | null
}

const normalizeEmail = (email: string) => email.trim().toLowerCase()

const buildName = (parts: Array<string | null | undefined>) => {
  const value = parts.filter(Boolean).join(' ').trim()
  return value.length > 0 ? value : null
}

const getVerifiedAt = (verified: boolean) => (verified ? new Date() : null)

const mapClerkUser = (user: ClerkUser): SyncableClerkUser | null => {
  const primaryEmail =
    user.emailAddresses.find(
      (emailAddress) => emailAddress.id === user.primaryEmailAddressId
    ) ?? user.emailAddresses[0]

  if (!primaryEmail?.emailAddress) {
    return null
  }

  return {
    clerkId: user.id,
    email: normalizeEmail(primaryEmail.emailAddress),
    name:
      user.fullName ??
      buildName([user.firstName, user.lastName]) ??
      user.username ??
      null,
    imageUrl: user.imageUrl ?? null,
    emailVerified: getVerifiedAt(
      primaryEmail.verification?.status === 'verified'
    ),
  }
}

const mapClerkWebhookUser = (user: UserJSON): SyncableClerkUser | null => {
  const primaryEmail =
    user.email_addresses.find(
      (emailAddress) => emailAddress.id === user.primary_email_address_id
    ) ?? user.email_addresses[0]

  if (!primaryEmail?.email_address) {
    return null
  }

  return {
    clerkId: user.id,
    email: normalizeEmail(primaryEmail.email_address),
    name:
      buildName([user.first_name, user.last_name]) ??
      user.username ??
      null,
    imageUrl: user.image_url ?? null,
    emailVerified: getVerifiedAt(
      primaryEmail.verification?.status === 'verified'
    ),
  }
}

export async function upsertClerkUser(input: SyncableClerkUser) {
  try {
    return await prisma.user.upsert({
      where: { clerkId: input.clerkId },
      update: {
        email: input.email,
        name: input.name,
        image: input.imageUrl,
        emailVerified: input.emailVerified,
      },
      create: {
        clerkId: input.clerkId,
        email: input.email,
        name: input.name,
        image: input.imageUrl,
        emailVerified: input.emailVerified,
        hashedPassword: null,
      },
    })
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      const existingByEmail = await prisma.user.findUnique({
        where: { email: input.email },
      })

      if (!existingByEmail) {
        throw error
      }

      return prisma.user.update({
        where: { id: existingByEmail.id },
        data: {
          clerkId: input.clerkId,
          name: input.name ?? existingByEmail.name,
          image: input.imageUrl,
          emailVerified: input.emailVerified ?? existingByEmail.emailVerified,
        },
      })
    }

    throw error
  }
}

export async function syncCurrentUserToDatabase() {
  const { userId } = await auth()

  if (!userId) {
    return null
  }

  const clerkUser = await currentUser()

  if (!clerkUser) {
    return null
  }

  const mappedUser = mapClerkUser(clerkUser)

  if (!mappedUser) {
    return null
  }

  return upsertClerkUser(mappedUser)
}

export async function syncWebhookUserToDatabase(user: UserJSON) {
  const mappedUser = mapClerkWebhookUser(user)

  if (!mappedUser) {
    return null
  }

  return upsertClerkUser(mappedUser)
}

export async function deleteClerkUserFromDatabase(clerkId: string) {
  const existingUser = await prisma.user.findUnique({
    where: { clerkId },
  })

  if (!existingUser) {
    return null
  }

  return prisma.user.delete({
    where: { id: existingUser.id },
  })
}
