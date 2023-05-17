/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductService from '../services/products';
import { Request, Response } from 'express';

export default class ProductController {
    static async create (req: Request, res: Response) {
        try {
            const product = await ProductService.create(req.body)
            res.status(201).json(product)
        } catch (error: Error | any | unknown) {
            console.log('Message error: ', error.message)
            res.status(400).send({message: error.message})
        }
    }

    static async findAll (req: Request, res: Response) {
        const product = await ProductService.findAll()

        res.status(200).json(product)
    }
}