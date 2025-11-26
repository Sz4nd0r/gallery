import { Router } from 'express'
import { loginUser, logoutUser, resgisterUser } from '../controllers/user.controller.js'

const router = Router()
router.route('/register').post(resgisterUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

export default router