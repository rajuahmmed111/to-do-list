
// import { connectToDatabase } from "@/lib/mongodb"
// import Task from "@/models/Task"
// import { auth } from "@/auth"
// import { revalidatePath } from "next/cache"

// export async function getTasks() {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     await connectToDatabase()

//     const tasks = await Task.find({ user: session.user.id }).sort({ createdAt: -1 })

//     return {
//       success: true,
//       data: tasks.map((task) => ({
//         id: task._id.toString(),
//         title: task.title,
//         completed: task.completed,
//         createdAt: task.createdAt.toISOString(),
//         completedAt: task.completedAt ? task.completedAt.toISOString() : null,
//       })),
//     }
//   } catch (error) {
//     console.error("Get tasks error:", error)
//     return { success: false, message: "Failed to fetch tasks" }
//   }
// }

// export async function addTask(formData: FormData) {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     const title = formData.get("title") as string

//     if (!title) {
//       return { success: false, message: "Task title is required" }
//     }

//     await connectToDatabase()

//     await Task.create({
//       title,
//       user: session.user.id,
//     })

//     revalidatePath("/dashboard")
//     return { success: true, message: "Task added successfully" }
//   } catch (error) {
//     console.error("Add task error:", error)
//     return { success: false, message: "Failed to add task" }
//   }
// }

// export async function toggleTaskCompletion(formData: FormData) {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     const taskId = formData.get("taskId") as string

//     if (!taskId) {
//       return { success: false, message: "Task ID is required" }
//     }

//     await connectToDatabase()

//     const task = await Task.findById(taskId)

//     if (!task) {
//       return { success: false, message: "Task not found" }
//     }

//     // Verify task belongs to user
//     if (task.user.toString() !== session.user.id) {
//       return { success: false, message: "Not authorized" }
//     }

//     task.completed = !task.completed
//     task.completedAt = task.completed ? new Date() : null

//     await task.save()

//     revalidatePath("/dashboard")
//     return { success: true, message: "Task updated successfully" }
//   } catch (error) {
//     console.error("Toggle task error:", error)
//     return { success: false, message: "Failed to update task" }
//   }
// }

// export async function updateTask(formData: FormData) {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     const taskId = formData.get("taskId") as string
//     const title = formData.get("title") as string

//     if (!taskId || !title) {
//       return { success: false, message: "Task ID and title are required" }
//     }

//     await connectToDatabase()

//     const task = await Task.findById(taskId)

//     if (!task) {
//       return { success: false, message: "Task not found" }
//     }

//     // Verify task belongs to user
//     if (task.user.toString() !== session.user.id) {
//       return { success: false, message: "Not authorized" }
//     }

//     task.title = title
//     await task.save()

//     revalidatePath("/dashboard")
//     return { success: true, message: "Task updated successfully" }
//   } catch (error) {
//     console.error("Update task error:", error)
//     return { success: false, message: "Failed to update task" }
//   }
// }

// export async function deleteTask(formData: FormData) {
//   try {
//     const session = await auth()

//     if (!session?.user?.id) {
//       return { success: false, message: "Not authenticated" }
//     }

//     const taskId = formData.get("taskId") as string

//     if (!taskId) {
//       return { success: false, message: "Task ID is required" }
//     }

//     await connectToDatabase()

//     const task = await Task.findById(taskId)

//     if (!task) {
//       return { success: false, message: "Task not found" }
//     }

//     // Verify task belongs to user
//     if (task.user.toString() !== session.user.id) {
//       return { success: false, message: "Not authorized" }
//     }

//     await Task.deleteOne({ _id: taskId })

//     revalidatePath("/dashboard")
//     return { success: true, message: "Task deleted successfully" }
//   } catch (error) {
//     console.error("Delete task error:", error)
//     return { success: false, message: "Failed to delete task" }
//   }
// }



// import Task from "@/models/Task"
// import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import { connectToDatabase } from "@/lib/mongodb"
import { auth } from "../../../auth"
import Task from "@/backend/models/Task"

export async function getTasks() {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    await connectToDatabase()

    const tasks = await Task.find({ user: session.user.id }).sort({ createdAt: -1 })

    return {
      success: true,
      data: tasks.map((task: { _id: { toString: () => any }; title: any; completed: any; createdAt: { toISOString: () => any }; completedAt: { toISOString: () => any } }) => ({
        id: task._id.toString(),
        title: task.title,
        completed: task.completed,
        createdAt: task.createdAt.toISOString(),
        completedAt: task.completedAt ? task.completedAt.toISOString() : null,
      })),
    }
  } catch (error) {
    console.error("Get tasks error:", error)
    return { success: false, message: "Failed to fetch tasks" }
  }
}

export async function addTask(formData: FormData) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    const title = formData.get("title") as string

    if (!title) {
      return { success: false, message: "Task title is required" }
    }

    await connectToDatabase()

    await Task.create({
      title,
      user: session.user.id,
    })

    revalidatePath("/dashboard")
    return { success: true, message: "Task added successfully" }
  } catch (error) {
    console.error("Add task error:", error)
    return { success: false, message: "Failed to add task" }
  }
}

export async function toggleTaskCompletion(formData: FormData) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    const taskId = formData.get("taskId") as string

    if (!taskId) {
      return { success: false, message: "Task ID is required" }
    }

    await connectToDatabase()

    const task = await Task.findById(taskId)

    if (!task) {
      return { success: false, message: "Task not found" }
    }

    // Verify task belongs to user
    if (task.user.toString() !== session.user.id) {
      return { success: false, message: "Not authorized" }
    }

    task.completed = !task.completed
    task.completedAt = task.completed ? new Date() : null

    await task.save()

    revalidatePath("/dashboard")
    return { success: true, message: "Task updated successfully" }
  } catch (error) {
    console.error("Toggle task error:", error)
    return { success: false, message: "Failed to update task" }
  }
}

export async function updateTask(formData: FormData) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    const taskId = formData.get("taskId") as string
    const title = formData.get("title") as string

    if (!taskId || !title) {
      return { success: false, message: "Task ID and title are required" }
    }

    await connectToDatabase()

    const task = await Task.findById(taskId)

    if (!task) {
      return { success: false, message: "Task not found" }
    }

    // Verify task belongs to user
    if (task.user.toString() !== session.user.id) {
      return { success: false, message: "Not authorized" }
    }

    task.title = title
    await task.save()

    revalidatePath("/dashboard")
    return { success: true, message: "Task updated successfully" }
  } catch (error) {
    console.error("Update task error:", error)
    return { success: false, message: "Failed to update task" }
  }
}

export async function deleteTask(formData: FormData) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return { success: false, message: "Not authenticated" }
    }

    const taskId = formData.get("taskId") as string

    if (!taskId) {
      return { success: false, message: "Task ID is required" }
    }

    await connectToDatabase()

    const task = await Task.findById(taskId)

    if (!task) {
      return { success: false, message: "Task not found" }
    }

    // Verify task belongs to user
    if (task.user.toString() !== session.user.id) {
      return { success: false, message: "Not authorized" }
    }

    await Task.deleteOne({ _id: taskId })

    revalidatePath("/dashboard")
    return { success: true, message: "Task deleted successfully" }
  } catch (error) {
    console.error("Delete task error:", error)
    return { success: false, message: "Failed to delete task" }
  }
}

