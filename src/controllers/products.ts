/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductService from '../services/products';
import { Request, Response } from 'express';


const productService = new ProductService()

export default class ProductController {
    public async create (req: Request, res: Response) {
        try {

            const product = await productService.create(req.body)
            res.status(201).json(product)
        } catch (error: Error | any | unknown) {

            console.log('Message error: ', error.message)
            res.status(400).send({message: error.message})
        }
    }

    public async findAll (req: Request, res: Response) {
        const product = await productService.getAll()

        res.status(200).json(product)
    }

    public async getById (req: Request, res: Response) {
        try {

            const {id} = req.params
            const product = await productService.getById(Number(id))
            res.status(200).json(product)
        } catch (error: Error | any | unknown) {

            console.log('Message error: ', error.message)
            res.status(400).send({message: error.message})
        }
    }

    public async deleteById(req: Request, res: Response) {
        const { id } = req.params

        try {
            await productService.deleteById(Number(id))
            res.status(200).send({message: 'Produto deletado com sucesso!'})

        } catch (error: Error | any | unknown) {
            console.log('message error: ', error.message);
            res.status(400).send({ message: error.message })
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
           const product = await productService.updateProduct(req.body)
            res.status(200).json(product)
        } catch (error: Error | any | unknown) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }   
    }
}