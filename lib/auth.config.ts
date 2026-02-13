import Credentials from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'

export default {
  providers: [
    Credentials({
      async authorize() {
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
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
} satisfies NextAuthConfig
