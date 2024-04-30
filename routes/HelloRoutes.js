import express from 'express'
import { sayHello } from '../controllers/HelloController.js'

const router = express.Router()

router.get('/', sayHello)
//router.get('/', sayHelloinFrench)
export default router