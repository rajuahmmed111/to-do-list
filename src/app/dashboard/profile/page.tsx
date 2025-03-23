// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"

// import type React from "react"

// import { useState, useRef } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { DashboardHeader } from "@/components/dashboard-header"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { useSession } from "next-auth/react"
// import { updateProfile, uploadProfilePicture } from "@/app/actions/profile-actions"
// import { Icons } from "@/components/icons"
// import { useToast } from "@/hooks/use-toast"

// export default function ProfilePage() {
//   const router = useRouter()
//   const { data: session, update } = useSession()
//   const { toast } = useToast()
//   const [isLoading, setIsLoading] = useState(false)
//   const [isUploading, setIsUploading] = useState(false)
//   const [name, setName] = useState(session?.user?.name || "")
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (!file) return

//     setIsUploading(true)
//     try {
//       const formData = new FormData()
//       formData.append("file", file)

//       const result = await uploadProfilePicture(formData)

//       if (result.success) {
//         toast({
//           title: "Success",
//           description: result.message,
//         })
//         // Update session to reflect new profile picture
//         await update({
//           ...session,
//           user: {
//             ...session?.user,
//             image: result.url,
//           },
//         })
//       } else {
//         toast({
//           title: "Error",
//           description: result.message,
//           variant: "destructive",
//         })
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to upload profile picture",
//         variant: "destructive",
//       })
//     } finally {
//       setIsUploading(false)
//     }
//   }

//   const handleSaveProfile = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!name.trim()) return

//     setIsLoading(true)
//     try {
//       const formData = new FormData()
//       formData.append("name", name.trim())

//       const result = await updateProfile(formData)

//       if (result.success) {
//         toast({
//           title: "Success",
//           description: result.message,
//         })
//         // Update session to reflect new name
//         await update({
//           ...session,
//           user: {
//             ...session?.user,
//             name: name.trim(),
//           },
//         })
//       } else {
//         toast({
//           title: "Error",
//           description: result.message,
//           variant: "destructive",
//         })
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to update profile",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="flex min-h-screen flex-col">
//       <DashboardHeader />
//       <main className="flex-1 space-y-4 p-4 md:p-8">
//         <div className="mx-auto max-w-2xl">
//           <Card>
//             <CardHeader>
//               <CardTitle>Profile</CardTitle>
//               <CardDescription>Update your profile information and profile picture.</CardDescription>
//             </CardHeader>
//             <form onSubmit={handleSaveProfile}>
//               <CardContent className="space-y-6">
//                 <div className="flex flex-col items-center space-y-4">
//                   <div className="relative">
//                     <Avatar className="h-24 w-24">
//                       <AvatarImage src={session?.user?.image || "/placeholder.svg?height=96&width=96"} alt="Profile" />
//                       <AvatarFallback>{session?.user?.name?.charAt(0) || "U"}</AvatarFallback>
//                     </Avatar>
//                     <Button
//                       type="button"
//                       size="sm"
//                       className="absolute bottom-0 right-0 rounded-full"
//                       variant="secondary"
//                       onClick={() => fileInputRef.current?.click()}
//                       disabled={isUploading}
//                     >
//                       {isUploading ? <Icons.spinner className="h-4 w-4 animate-spin" /> : "Change"}
//                     </Button>
//                     <Input
//                       ref={fileInputRef}
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                       disabled={isUploading}
//                     />
//                   </div>
//                   <p className="text-xs text-muted-foreground">Upload a profile picture. JPG, PNG or GIF. Max 2MB.</p>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Name</Label>
//                     <Input id="name" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" value={session?.user?.email || ""} disabled={true} />
//                     <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button type="submit" disabled={isLoading || !name.trim()} className="ml-auto">
//                   {isLoading ? (
//                     <>
//                       <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//                       Saving...
//                     </>
//                   ) : (
//                     "Save changes"
//                   )}
//                 </Button>
//               </CardFooter>
//             </form>
//           </Card>
//         </div>
//       </main>
//     </div>
//   )
// }


"use client"

import type React from "react"
import { useState, useRef } from "react"
// import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DashboardHeader } from "@/components/dashboard-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/AuthContext"

export default function ProfilePage() {
  // const router = useRouter()
  const { user, updateProfile, uploadProfileImage } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [name, setName] = useState(user?.name || "")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      await uploadProfileImage(file)

      toast({
        title: "Success",
        description: "Profile picture updated successfully",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to upload profile picture",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    setIsLoading(true)
    try {
      await updateProfile(name.trim())

      toast({
        title: "Success",
        description: "Profile updated successfully",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your profile information and profile picture.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSaveProfile}>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user?.profilePicture || "/placeholder.svg?height=96&width=96"} alt="Profile" />
                      <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    <Button
                      type="button"
                      size="sm"
                      className="absolute bottom-0 right-0 rounded-full"
                      variant="secondary"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading}
                    >
                      {isUploading ? <Icons.spinner className="h-4 w-4 animate-spin" /> : "Change"}
                    </Button>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                      disabled={isUploading}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Upload a profile picture. JPG, PNG or GIF. Max 2MB.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={user?.email || ""} disabled={true} />
                    <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading || !name.trim()} className="ml-auto">
                  {isLoading ? (
                    <>
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
    </div>
  )
}

