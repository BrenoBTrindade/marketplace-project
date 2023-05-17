import { Router } from 'express'
import ProductController from '../controllers/products'

const ProductRouter = Router()

ProductRouter
  .post('/product', ProductController.create)
  .get('/product', ProductController.findAll)

export default ProductRouter