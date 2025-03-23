// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { connectToDatabase } from "@/lib/mongodb"
// import User from "@/models/User"

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please enter email and password")
//         }

//         await connectToDatabase()

//         // Find user by email
//         const user = await User.findOne({ email: credentials.email }).select("+password")

//         if (!user) {
//           throw new Error("Invalid email or password")
//         }

//         // Check if password matches
//         const isMatch = await user.matchPassword(credentials.password)

//         if (!isMatch) {
//           throw new Error("Invalid email or password")
//         }

//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//           image: user.profilePicture,
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session({ session, token }) {
//       if (token) {
//         session?.user?.id = token.id as string
//       }
//       return session
//     },
//   },
//   pages: {
//     signIn: "/sign-in",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// })

// export { handler as GET, handler as POST }



import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/User"
import { connectToDatabase } from "@/lib/mongodb"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password")
        }

        await connectToDatabase()

        // Find user by email
        const user = await User.findOne({ email: credentials.email }).select("+password")

        if (!user) {
          throw new Error("Invalid email or password")
        }

        // Check if password matches
        const isMatch = await user.matchPassword(credentials.password)

        if (!isMatch) {
          throw new Error("Invalid email or password")
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.profilePicture,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }

