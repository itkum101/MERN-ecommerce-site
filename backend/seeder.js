import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import Users from './data/users.js'
import Products from './data/products.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(Users)
    const adminUser = createdUser[0]._id

    const sampleProducts = Products.map((product) => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleProducts)

    console.log('DATA IMPORTED!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.cyan.inverse)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    console.log('DATA Destroyed!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}t`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
