/* eslint-disable @typescript-eslint/no-require-imports */
const asyncHandler = require("express-async-handler")
const Task = require("../models/taskModel")

// @desc    Get all tasks for a user
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 })
  res.json(tasks)
})

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title } = req.body

  if (!title) {
    res.status(400)
    throw new Error("Please add a task title")
  }

  const task = await Task.create({
    title,
    user: req.user._id,
  })

  res.status(201).json(task)
})

// @desc    Get a single task
// @route   GET /api/tasks/:id
// @access  Private
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(404)
    throw new Error("Task not found")
  }

  // Check if task belongs to user
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error("Not authorized")
  }

  res.json(task)
})

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const { title } = req.body

  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(404)
    throw new Error("Task not found")
  }

  // Check if task belongs to user
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error("Not authorized")
  }

  if (title) {
    task.title = title
  }

  const updatedTask = await task.save()
  res.json(updatedTask)
})

// @desc    Toggle task completion
// @route   PUT /api/tasks/:id/toggle
// @access  Private
const toggleTaskCompletion = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(404)
    throw new Error("Task not found")
  }

  // Check if task belongs to user
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error("Not authorized")
  }

  task.completed = !task.completed
  task.completedAt = task.completed ? Date.now() : null

  const updatedTask = await task.save()
  res.json(updatedTask)
})

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if (!task) {
    res.status(404)
    throw new Error("Task not found")
  }

  // Check if task belongs to user
  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error("Not authorized")
  }

  await Task.deleteOne({ _id: req.params.id })
  res.json({ message: "Task removed" })
})

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  toggleTaskCompletion,
  deleteTask,
}

