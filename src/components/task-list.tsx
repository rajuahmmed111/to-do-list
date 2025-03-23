// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { formatDate } from "@/lib/utils"
// import { Pencil, Trash, X, Check } from "lucide-react"
// import { toggleTaskCompletion, updateTask, deleteTask } from "@/app/actions/task-actions"
// import { Icons } from "@/components/icons"
// import { Task } from "@/app/types/task"
// import { useToast } from "@/hooks/use-toast"

// interface TaskListProps {
//   tasks: Task[]
//   onToggleCompletion: () => void
//   onDeleteTask: () => void
//   onUpdateTask: () => void
// }

// export function TaskList({ tasks, onToggleCompletion, onDeleteTask, onUpdateTask }: TaskListProps) {
//   const { toast } = useToast()
//   const [editingId, setEditingId] = useState<string | null>(null)
//   const [editValue, setEditValue] = useState("")
//   const [isLoading, setIsLoading] = useState<string | null>(null)

//   const startEditing = (id: string, currentTitle: string) => {
//     setEditingId(id)
//     setEditValue(currentTitle)
//   }

//   const cancelEditing = () => {
//     setEditingId(null)
//     setEditValue("")
//   }

//   const handleToggleCompletion = async (id: string) => {
//     setIsLoading(id)
//     try {
//       const formData = new FormData()
//       formData.append("taskId", id)

//       const result = await toggleTaskCompletion(formData)

//       if (result.success) {
//         onToggleCompletion()
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
//         description: "Failed to update task",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(null)
//     }
//   }

//   const handleUpdateTask = async (id: string) => {
//     if (!editValue.trim()) return

//     setIsLoading(id)
//     try {
//       const formData = new FormData()
//       formData.append("taskId", id)
//       formData.append("title", editValue)

//       const result = await updateTask(formData)

//       if (result.success) {
//         onUpdateTask()
//         setEditingId(null)
//         setEditValue("")
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
//         description: "Failed to update task",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(null)
//     }
//   }

//   const handleDeleteTask = async (id: string) => {
//     setIsLoading(id)
//     try {
//       const formData = new FormData()
//       formData.append("taskId", id)

//       const result = await deleteTask(formData)

//       if (result.success) {
//         onDeleteTask()
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
//         description: "Failed to delete task",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(null)
//     }
//   }

//   if (tasks.length === 0) {
//     return (
//       <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
//         <p className="text-sm text-muted-foreground">No tasks found.</p>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-2">
//       {tasks.map((task) => (
//         <div key={task.id} className="flex items-start justify-between rounded-md border p-4">
//           <div className="flex flex-1 items-start space-x-3">
//             <Checkbox
//               id={`task-${task.id}`}
//               checked={task.completed}
//               onCheckedChange={() => handleToggleCompletion(task.id)}
//               disabled={isLoading === task.id}
//             />
//             <div className="flex-1 space-y-1">
//               {editingId === task.id ? (
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     value={editValue}
//                     onChange={(e) => setEditValue(e.target.value)}
//                     className="h-8"
//                     autoFocus
//                     disabled={isLoading === task.id}
//                   />
//                   <Button
//                     size="icon"
//                     variant="ghost"
//                     onClick={() => handleUpdateTask(task.id)}
//                     disabled={isLoading === task.id}
//                   >
//                     <Check className="h-4 w-4" />
//                     <span className="sr-only">Save</span>
//                   </Button>
//                   <Button size="icon" variant="ghost" onClick={cancelEditing} disabled={isLoading === task.id}>
//                     <X className="h-4 w-4" />
//                     <span className="sr-only">Cancel</span>
//                   </Button>
//                 </div>
//               ) : (
//                 <label
//                   htmlFor={`task-${task.id}`}
//                   className={`text-sm font-medium ${task.completed ? "text-muted-foreground line-through" : ""}`}
//                 >
//                   {task.title}
//                 </label>
//               )}
//               <div className="flex space-x-4 text-xs text-muted-foreground">
//                 <span>Created: {formatDate(task.createdAt)}</span>
//                 {task.completed && task.completedAt && <span>Completed: {formatDate(task.completedAt)}</span>}
//               </div>
//             </div>
//           </div>
//           {editingId !== task.id && (
//             <div className="flex space-x-1">
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => startEditing(task.id, task.title)}
//                 disabled={isLoading === task.id}
//               >
//                 <Pencil className="h-4 w-4" />
//                 <span className="sr-only">Edit</span>
//               </Button>
//               <Button
//                 size="icon"
//                 variant="ghost"
//                 onClick={() => handleDeleteTask(task.id)}
//                 disabled={isLoading === task.id}
//               >
//                 <Trash className="h-4 w-4" />
//                 <span className="sr-only">Delete</span>
//               </Button>
//             </div>
//           )}
//           {isLoading === task.id && (
//             <div className="flex items-center justify-center h-8 w-8">
//               <Icons.spinner className="h-4 w-4 animate-spin" />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }




"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { formatDate } from "@/lib/utils"
import { Pencil, Trash, X, Check } from "lucide-react"
import { Icons } from "@/components/icons"
import { useToast } from "@/hooks/use-toast"
import { useTask } from "@/contexts/TaskContext"

interface Task {
  _id: string
  title: string
  completed: boolean
  createdAt: string
  completedAt: string | null
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const { toggleTaskCompletion, updateTask, deleteTask } = useTask()
  const { toast } = useToast()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const startEditing = (id: string, currentTitle: string) => {
    setEditingId(id)
    setEditValue(currentTitle)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditValue("")
  }

  const handleToggleCompletion = async (id: string) => {
    setIsLoading(id)
    try {
      await toggleTaskCompletion(id)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update task",
        variant: "destructive",
      })
    } finally {
      setIsLoading(null)
    }
  }

  const handleUpdateTask = async (id: string) => {
    if (!editValue.trim()) return

    setIsLoading(id)
    try {
      await updateTask(id, editValue)
      setEditingId(null)
      setEditValue("")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update task",
        variant: "destructive",
      })
    } finally {
      setIsLoading(null)
    }
  }

  const handleDeleteTask = async (id: string) => {
    setIsLoading(id)
    try {
      await deleteTask(id)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete task",
        variant: "destructive",
      })
    } finally {
      setIsLoading(null)
    }
  }

  if (tasks.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
        <p className="text-sm text-muted-foreground">No tasks found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task._id} className="flex items-start justify-between rounded-md border p-4">
          <div className="flex flex-1 items-start space-x-3">
            <Checkbox
              id={`task-${task._id}`}
              checked={task.completed}
              onCheckedChange={() => handleToggleCompletion(task._id)}
              disabled={isLoading === task._id}
            />
            <div className="flex-1 space-y-1">
              {editingId === task._id ? (
                <div className="flex items-center space-x-2">
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="h-8"
                    autoFocus
                    disabled={isLoading === task._id}
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleUpdateTask(task._id)}
                    disabled={isLoading === task._id}
                  >
                    <Check className="h-4 w-4" />
                    <span className="sr-only">Save</span>
                  </Button>
                  <Button size="icon" variant="ghost" onClick={cancelEditing} disabled={isLoading === task._id}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Cancel</span>
                  </Button>
                </div>
              ) : (
                <label
                  htmlFor={`task-${task._id}`}
                  className={`text-sm font-medium ${task.completed ? "text-muted-foreground line-through" : ""}`}
                >
                  {task.title}
                </label>
              )}
              <div className="flex space-x-4 text-xs text-muted-foreground">
                <span>Created: {formatDate(task.createdAt)}</span>
                {task.completed && task.completedAt && <span>Completed: {formatDate(task.completedAt)}</span>}
              </div>
            </div>
          </div>
          {editingId !== task._id && (
            <div className="flex space-x-1">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => startEditing(task._id, task.title)}
                disabled={isLoading === task._id}
              >
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleDeleteTask(task._id)}
                disabled={isLoading === task._id}
              >
                <Trash className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          )}
          {isLoading === task._id && (
            <div className="flex items-center justify-center h-8 w-8">
              <Icons.spinner className="h-4 w-4 animate-spin" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

