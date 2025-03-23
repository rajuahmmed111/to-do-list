/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express")
const router = express.Router()
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  toggleTaskCompletion,
  deleteTask,
} = require("../controllers/taskController")
const { protect } = require("../middleware/authMiddleware")

router.route("/").get(protect, getTasks).post(protect, createTask)

router.route("/:id").get(protect, getTask).put(protect, updateTask).delete(protect, deleteTask)

router.put("/:id/toggle", protect, toggleTaskCompletion)

module.exports = router

