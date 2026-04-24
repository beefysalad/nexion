import prisma from '@/lib/prisma'

import type { User } from '@/app/generated/prisma/client'

export const userRepository = {
  findByClerkId(clerkId: string) {
    return prisma.user.findUnique({
      where: { clerkId },
    })
  },

  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    })
  },

  findById(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
    })
  },

  createClerkUser(input: {
    clerkId: string
    email: string
    name: string | null
    image: string | null
    emailVerified: Date | null
  }) {
    return prisma.user.create({
      data: {
        clerkId: input.clerkId,
        email: input.email,
        name: input.name,
        image: input.image,
        emailVerified: input.emailVerified,
        hashedPassword: null,
      },
    })
  },

  updateClerkUserById(input: {
    userId: string
    email: string
    name: string | null
    image: string | null
    emailVerified: Date | null
  }) {
    return prisma.user.update({
      where: { id: input.userId },
      data: {
        email: input.email,
        name: input.name,
        image: input.image,
        emailVerified: input.emailVerified,
      },
    })
  },

  completeOnboardingById(input: {
    userId: string
  }) {
    return prisma.user.update({
      where: { id: input.userId },
      data: {
        onboardingCompleted: true,
        onboardingCompletedAt: new Date(),
      },
    })
  },

  linkClerkIdentityByEmail(input: {
    userId: string
    clerkId: string
    name: string | null
    image: string | null
    emailVerified: Date | null
    currentName: string | null
    currentEmailVerified: Date | null
  }) {
    return prisma.user.update({
      where: { id: input.userId },
      data: {
        clerkId: input.clerkId,
        name: input.name ?? input.currentName,
        image: input.image,
        emailVerified: input.emailVerified ?? input.currentEmailVerified,
      },
    })
  },

  deleteById(id: string) {
    return prisma.user.delete({
      where: { id },
    })
  },
} satisfies Record<string, (...args: never[]) => Promise<User | null> | Promise<User>>
