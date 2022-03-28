import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
/* Config */
import {connectDB} from './config/db.js'
/* Routes */
import userRoutes from './routes/userRoutes.js'
/* Middleware */
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config()

connectDB()

const app = express()

if ( process.env.NODE_ENV === 'development' ) {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/users', userRoutes)

/* 404 */
app.use(notFound)

/* 200->500 + message */
app.use(errorHandler)

export default app
