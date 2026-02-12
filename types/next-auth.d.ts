import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      createdAt?: string
    } & DefaultSession['user']
  }

  interface User {
    createdAt?: Date | string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    createdAt?: Date | string
  }
}
