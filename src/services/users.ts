
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Optional} from 'sequelize';
import Users from '../database/models/users';
import { hash } from 'bcrypt';
import *  as uuid from 'uuid'

export default class UserService {
    public async create(data: Optional<any, string>): Promise<Users> {
        const user = await Users.findOne({
            where: {
                email: data.email
            }
        });
        if (user) {
          throw new Error('Usuario Ja cadastrado')
        }

        try {
            const passwordHash = await hash(data.password, 8)

            const newUser = await Users.create({
                id: uuid.v4(),
                name: data.name,
                email: data.email,
                password: passwordHash
            });

            return newUser;


        } catch (error: Error | any | unknown) {
            console.error('message error: ' , error.message);
            throw error;
        }
      }

      public async getAll(): Promise<Users[]> {
        const users = await Users.findAll()
        return users;
      }

      public async findById(id: string): Promise<Users | null> {
        const user = await Users.findOne({
            where: {
                id
            }
        });
        if (!user) {
            throw new Error('Usuario informado não cadastrado!') 
        }
        return user;
      }

      public async deleteById(id: string): Promise<void> {
        await this.findById(id)

        try {
            await Users.destroy({
                where: {
                    id
                }
            })
        } catch (error: Error | any | unknown) {
            throw error;
        }
      }

}

