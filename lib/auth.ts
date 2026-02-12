import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from './prisma'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import authConfig from './auth.config'

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
  ...authConfig,
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
        token.createdAt = user.createdAt
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.createdAt = token.createdAt as string
      }
      return session
    },
  },
})
