"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./AuthContext"
import { tokenStorage } from "@/services/tokenStorage"
import { taskService } from "@/services/api"

interface Task {
  _id: string
  title: string
  completed: boolean
  createdAt: string
  completedAt: string | null
}

interface TaskContextType {
  tasks: Task[]
  loading: boolean
  error: string | null
  fetchTasks: () => Promise<void>
  addTask: (title: string) => Promise<void>
  updateTask: (id: string, title: string) => Promise<void>
  toggleTaskCompletion: (id: string) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  // Fetch tasks when user changes
  useEffect(() => {
    if (user) {
      fetchTasks()
    }
  }, [user])

  // Fetch all tasks
  const fetchTasks = async () => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      const data = await taskService.getTasks(token)
      setTasks(data)
    } catch (error: any) {
      setError(error.message)
      console.error("Error fetching tasks:", error)
    } finally {
      setLoading(false)
    }
  }

  // Add a new task
  const addTask = async (title: string) => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      await taskService.createTask({ title }, token)
      await fetchTasks()
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Update a task
  const updateTask = async (id: string, title: string) => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      await taskService.updateTask(id, { title }, token)
      await fetchTasks()
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Toggle task completion
  const toggleTaskCompletion = async (id: string) => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      await taskService.toggleTask(id, token)
      await fetchTasks()
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  // Delete a task
  const deleteTask = async (id: string) => {
    setLoading(true)
    setError(null)

    try {
      const token = tokenStorage.getToken()
      if (!token) throw new Error("Not authenticated")

      await taskService.deleteTask(id, token)
      await fetchTasks()
    } catch (error: any) {
      setError(error.message)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        addTask,
        updateTask,
        toggleTaskCompletion,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider")
  }
  return context
}

