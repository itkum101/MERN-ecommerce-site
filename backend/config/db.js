import mongoose from 'mongoose'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`MONGODB CONNECTED ${conn.connection.host}`)
  } catch (error) {
    console.log(`ERROR MESSAGE: ${error.message}`)
  }
}
export default connectDB
