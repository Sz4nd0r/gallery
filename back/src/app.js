import express from "express"

const app = express()

app.use(express.json())

// importing routes
import userRouter from './routes/user.route.js'

// declaring routes
app.use("api/v1/users", userRouter)

// exaple route http://localhost:4000/api/v1/user/register

export default app;