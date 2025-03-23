/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express")
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  uploadProfilePicture,
} = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")
const { upload } = require("../middleware/uploadMiddleware")

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)
router.post("/profile/upload", protect, upload.single("profilePicture"), uploadProfilePicture)

module.exports = router

