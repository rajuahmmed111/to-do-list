
// import { connectToDatabase } from "@/lib/mongodb"
// import User from "@/models/User"
// import { auth } from "@/auth"
// import { revalidatePath } from "next/cache"
// import { put } from "@vercel/blob"

// export async function updateProfile(formData: FormData) {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     const name = formData.get("name") as string

//     if (!name) {
//       return { success: false, message: "Name is required" }
//     }

//     await connectToDatabase()

//     await User.findByIdAndUpdate(session.user.id, { name })

//     revalidatePath("/dashboard/profile")
//     return { success: true, message: "Profile updated successfully" }
//   } catch (error) {
//     console.error("Update profile error:", error)
//     return { success: false, message: "Failed to update profile" }
//   }
// }

// export async function uploadProfilePicture(formData: FormData) {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     const file = formData.get("file") as File

//     if (!file) {
//       return { success: false, message: "No file provided" }
//     }

//     // Check file size (max 2MB)
//     if (file.size > 2 * 1024 * 1024) {
//       return { success: false, message: "File size exceeds 2MB limit" }
//     }

//     // Check file type
//     if (!file.type.startsWith("image/")) {
//       return { success: false, message: "Only image files are allowed" }
//     }

//     // Upload to Vercel Blob
//     const blob = await put(`profile-pictures/${session.user.id}-${Date.now()}`, file, {
//       access: "public",
//     })

//     await connectToDatabase()

//     // Update user profile picture URL
//     await User.findByIdAndUpdate(session.user.id, { profilePicture: blob.url })

//     revalidatePath("/dashboard/profile")
//     return { success: true, message: "Profile picture updated successfully", url: blob.url }
//   } catch (error) {
//     console.error("Upload profile picture error:", error)
//     return { success: false, message: "Failed to upload profile picture" }
//   }
// }


// import User from "@/models/User"
// import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import { put } from "@vercel/blob"
import { connectToDatabase } from "@/lib/mongodb"
import { auth } from "../../../auth"
import User from "@/backend/models/User"

export async function updateProfile(formData: FormData) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    const name = formData.get("name") as string

    if (!name) {
      return { success: false, message: "Name is required" }
    }

    await connectToDatabase()

    await User.findByIdAndUpdate(session.user.id, { name })

    revalidatePath("/dashboard/profile")
    return { success: true, message: "Profile updated successfully" }
  } catch (error) {
    console.error("Update profile error:", error)
    return { success: false, message: "Failed to update profile" }
  }
}

export async function uploadProfilePicture(file: File, token: string, formData: FormData) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    const file = formData.get("file") as File

    if (!file) {
      return { success: false, message: "No file provided" }
    }

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      return { success: false, message: "File size exceeds 2MB limit" }
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      return { success: false, message: "Only image files are allowed" }
    }

    // Upload to Vercel Blob
    const blob = await put(`profile-pictures/${session.user.id}-${Date.now()}`, file, {
      access: "public",
    })

    await connectToDatabase()

    // Update user profile picture URL
    await User.findByIdAndUpdate(session.user.id, { profilePicture: blob.url })

    revalidatePath("/dashboard/profile")
    return { success: true, message: "Profile picture updated successfully", url: blob.url }
  } catch (error) {
    console.error("Upload profile picture error:", error)
    return { success: false, message: "Failed to upload profile picture" }
  }
}

