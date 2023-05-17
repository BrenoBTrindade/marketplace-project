import { Router } from 'express'
import ProductController from '../controllers/products'

const ProductRouter = Router()


ProductRouter
  .post('/product', ProductController.create)
  .get('/product', ProductController.findAll)
  .get('/product/:id', ProductController.getById)

export default ProductRouter