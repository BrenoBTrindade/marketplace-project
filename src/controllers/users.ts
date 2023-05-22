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

}