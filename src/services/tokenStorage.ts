// Local storage keys
const TOKEN_KEY = "auth_token"
const USER_KEY = "user_info"

// Token storage service
export const tokenStorage = {
  // Set token and user info
  setToken: (token: string, user: any) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },

  // Get token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY)
    }
    return null
  },

  // Get user info
  getUser: (): any => {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem(USER_KEY)
      return userStr ? JSON.parse(userStr) : null
    }
    return null
  },

  // Clear token and user info
  clearToken: () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  },
}

