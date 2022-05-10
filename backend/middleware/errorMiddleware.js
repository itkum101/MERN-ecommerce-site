import express from 'express'
const app = express()

const errorsd = (req, res, next) => {
  const errorz = new Error(`NOT FOUND -${req.originalUrl}`)
  console.log('WORKING ME ')
  res.status(404)
  next(errorz)
}

const errorHandling = (err, req, res, next) => {
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { errorsd, errorHandling }
