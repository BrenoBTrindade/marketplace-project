import { Router } from 'express'
import UserController from '../controllers/users'

const userController = new UserController()
const UserRouter = Router()

UserRouter
  .post('/users', userController.create)

export default UserRouter