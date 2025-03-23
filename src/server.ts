/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./config/db")
const { errorHandler } = require("./middleware/errorMiddleware")
const path = require("path")

// Load env vars
dotenv.config()

// Connect to database
connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// Static folder for uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/tasks", require("./routes/taskRoutes"))

// Health check route
app.get("/", (req: any, res: { json: (arg0: { message: string }) => void }) => {
  res.json({ message: "API is running..." })
})

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

