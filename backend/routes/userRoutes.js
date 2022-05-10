import express from 'express'

const router = express.Router()
import { authUser, createUser } from '../controllers/userController.js'

router.post('/login', authUser)
router.post('/register', createUser)
export default router
