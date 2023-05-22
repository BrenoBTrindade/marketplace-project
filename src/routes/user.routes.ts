import { Router } from 'express'
import UserController from '../controllers/users'

const userController = new UserController()
const UserRouter = Router()

UserRouter
  .post('/users', userController.create)
  .get('/users', userController.findAll)
  .get('/users/:id', userController.findById)
  .delete('/users/:id', userController.deleteById)
  .put('/users' , userController.update)

export default UserRouter