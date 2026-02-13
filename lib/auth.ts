import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from './prisma'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

type UserWithPassword =
  | (Awaited<ReturnType<typeof prisma.user.findUnique>> & {
      hashedPassword?: string | null
    })
  | null

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        if (
          typeof credentials?.email !== 'string' ||
          typeof credentials?.password !== 'string'
        ) {
          return null
        }
        const email = credentials.email.toLowerCase()
        const password = credentials.password

        const user = (await prisma.user.findUnique({
          where: {
            email,
          },
        })) as UserWithPassword

        const hashedPassword = user?.hashedPassword

        if (!hashedPassword) {
          return null
        }
        const isPasswordValid = await bcrypt.compare(password, hashedPassword)

        if (!isPasswordValid) {
          return null
        }

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
        token.email = user.email
        token.name = user.name

        token.createdAt =
          user.createdAt instanceof Date
            ? user.createdAt.toISOString()
            : user.createdAt
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      if (session.user && token.createdAt) {
        session.user.createdAt = token.createdAt as string
      }
      return session
    },
  },
})
