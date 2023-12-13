import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user-routes.js'
import cookieParser from 'cookie-parser'
import { errorHandler, notFound } from "./middlewares/error-middleware.js"
import connectDB from "./config/db.js"
import cors from 'cors'

dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors({
    credentials: true,
    // origin: "http://localhost:5173"
    origin: `${process.env.CLIENT_URI}`
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log("server started at", PORT))
