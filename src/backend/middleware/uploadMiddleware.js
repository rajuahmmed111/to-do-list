import multer, { diskStorage } from "multer"
import { join, extname as _extname } from "path"
import { existsSync, mkdirSync } from "fs"

// Ensure uploads directory exists
const uploadsDir = join(__dirname, "../uploads")
if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir, { recursive: true })
}

// Configure storage
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, `${req.user._id}-${Date.now()}${_extname(file.originalname)}`)
  },
})

// Check file type
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/
  const mimetype = filetypes.test(file.mimetype)
  const extname = filetypes.test(_extname(file.originalname).toLowerCase())

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb(new Error("Only image files are allowed!"))
  }
}

const upload = multer({
  storage,
  limits: { fileSize: 2000000 }, // 2MB
  fileFilter,
})

export default { upload }

