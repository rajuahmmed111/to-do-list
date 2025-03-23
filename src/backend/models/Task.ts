import mongoose, { Schema, models } from "mongoose"

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: {
    type: Date,
    default: null,
  },
})

// Prevent model overwrite during hot reloads
const Task = models.Task || mongoose.model("Task", TaskSchema)

export default Task

