import type { DefaultSession } from "next-auth"
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
  }
}

export const auth = NextAuth({
  providers: [], // Add your authentication providers here
})

