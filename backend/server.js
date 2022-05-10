import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorsd, errorHandling } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use(errorsd)
app.use(errorHandling)

const PORT = process.env.PORT
app.listen(PORT, console.log('Server RUNNINT IN PORT 5000'))
