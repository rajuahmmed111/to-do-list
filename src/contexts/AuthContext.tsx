"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { tokenStorage } from "@/services/tokenStorage"
import { authService, uploadProfilePicture } from "@/services/api"


interface User {
  _id: string
  name: string
  email: string
  profilePicture?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  register: (name: string, email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (name: string) => Promise<void>
  uploadProfileImage: (file: File) => Promise<string>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = tokenStorage.getToken()
        const storedUser = tokenStorage.getUser()

        if (token && storedUser) {
          setUser(storedUser)
        }
      } catch (error) {
        console.error("Auth initialization error:", error)
      } finally {
        setLoading(false)
      }
    }

    checkLoggedIn()
  }, [])

  // Register user
  const register = async (name: string, email: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      await authService.register({ name, email, password })
      router.push("/sign-in")
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Login user
  const login = async (email: string, password: string) => {
    setLoading(true)
    setError(null)

    try {
      const data = await authService.login({ email, password })
      setUser({
        _id: data._id,
        name: data.name,
        email: data.email,
        profilePicture: data.profilePicture,
      })
      tokenStorage.setToken(data.token, {
        _id: data._id,
        name: data.name,
        email: data.email,
        profilePicture: data.profilePicture,
      })
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Logout user
  const logout = () => {
    tokenStorage.clearToken()
    setUser(null)
    router.push("/sign-in")
  }

  // Update profile
  const updateProfile = async (name: string) => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      const data = await authService.updateProfile({ name }, token)

      // Update user state and storage
      if (user) {
        const updatedUser = { ...user, name }
        setUser(updatedUser)
        tokenStorage.setToken(data.token, updatedUser)
      }
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Upload profile image
  const uploadProfileImage = async (file: File) => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      const data = await uploadProfilePicture(file, token)

      // Update user state and storage
      if (user) {
        const updatedUser = { ...user, profilePicture: data.profilePicture }
        setUser(updatedUser)
        tokenStorage.setToken(token, updatedUser)
      }

      return data.profilePicture
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        register,
        login,
        logout,
        updateProfile,
        uploadProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

