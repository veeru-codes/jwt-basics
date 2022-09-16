import express from 'express'
import { dashboard, login } from '../controllers/main.js'

const jwtRouter = express.Router()

jwtRouter.route('/login').post(login)
jwtRouter.route('/dashboard').get(dashboard)

export default jwtRouter
