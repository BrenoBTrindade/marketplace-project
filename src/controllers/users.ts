/* eslint-disable @typescript-eslint/no-explicit-any */
import UserService from '../services/users';
import { Request, Response } from 'express';

const userService = new UserService()

export default class UserController {
    public async create (req: Request, res: Response) {
        try {

            const user = await userService.create(req.body)
            res.status(201).json(user)
        } catch (error: Error | any | unknown) {

            console.log('Message error: ', error.message)
            res.status(400).send({message: error.message})
        }
    }

    public async findAll(req: Request, res: Response) {
        const product = await userService.getAll()

        res.status(200).json(product)
    }

    public async findById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const user = await userService.findById(id)
            res.status(200).json(user)
        } catch (error: Error | any | unknown) {
            res.status(400).send({message: error.message})
        }
    }

    public async deleteById(req: Request, res: Response) {
        const { id } = req.params
        try {
            await userService.deleteById(id);
            res.status(200).send({message: 'Usuario deletado'})
        } catch (error: Error | any | unknown) {
            console.log('message error: ', error.message);
            res.status(400).send({ message: error.message })
        }
    }

}