

// // import { connectToDatabase } from "@/lib/mongodb"
// // import User from "@/models/User"

// export async function registerUser(formData: FormData) {
//   try {
//     const name = formData.get("name") as string
//     const email = formData.get("email") as string
//     const password = formData.get("password") as string

//     if (!name || !email || !password) {
//       return { success: false, message: "All fields are required" }
//     }

//     await connectToDatabase()

//     // Check if user already exists
//     const existingUser = await User.findOne({ email })

//     if (existingUser) {
//       return { success: false, message: "User already exists with this email" }
//     }

//     // Create new user
//     await User.create({
//       name,
//       email,
//       password,
//     })

//     return { success: true, message: "Registration successful" }
//   } catch (error) {
//     console.error("Registration error:", error)
//     return { success: false, message: "An error occurred during registration" }
//   }
// }


"use server"

import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"

export async function registerUser(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!name || !email || !password) {
      return { success: false, message: "All fields are required" }
    }

    await connectToDatabase()

    // Check if user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return { success: false, message: "User already exists with this email" }
    }

    // Create new user
    await User.create({
      name,
      email,
      password,
    })

    return { success: true, message: "Registration successful" }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, message: "An error occurred during registration" }
  }
}

