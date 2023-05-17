import { Router } from 'express'
import ProductController from '../controllers/products'

const productController = new ProductController()
const ProductRouter = Router()

ProductRouter
  .post('/product', productController.create)
  .get('/product', productController.findAll)
  .get('/product/:id', productController.getById)
  .delete('/product/:id', productController.deleteById)

export default ProductRouter