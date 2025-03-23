const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// Helper function for API calls
async function apiCall(endpoint: string, method = "GET", data: any = null, token: string | null = null) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const config: RequestInit = {
    method,
    headers,
  }

  if (data) {
    config.body = JSON.stringify(data)
  }

  const response = await fetch(`${API_URL}${endpoint}`, config)
  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong")
  }

  return responseData
}

// Auth services
export const authService = {
  register: (userData: any) => apiCall("/users", "POST", userData),
  login: (credentials: any) => apiCall("/users/login", "POST", credentials),
  getProfile: (token: string) => apiCall("/users/profile", "GET", null, token),
  updateProfile: (userData: any, token: string) => apiCall("/users/profile", "PUT", userData, token),
}

// Task services
export const taskService = {
  getTasks: (token: string) => apiCall("/tasks", "GET", null, token),
  createTask: (taskData: any, token: string) => apiCall("/tasks", "POST", taskData, token),
  getTask: (id: string, token: string) => apiCall(`/tasks/${id}`, "GET", null, token),
  updateTask: (id: string, taskData: any, token: string) => apiCall(`/tasks/${id}`, "PUT", taskData, token),
  toggleTask: (id: string, token: string) => apiCall(`/tasks/${id}/toggle`, "PUT", null, token),
  deleteTask: (id: string, token: string) => apiCall(`/tasks/${id}`, "DELETE", null, token),
}

// Profile picture upload
export const uploadProfilePicture = async (file: File, token: string) => {
  const formData = new FormData()
  formData.append("profilePicture", file)

  const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
  }

  const response = await fetch(`${API_URL}/users/profile/upload`, {
    method: "POST",
    headers,
    body: formData,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }

  return data
}

