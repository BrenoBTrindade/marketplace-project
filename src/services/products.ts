/* eslint-disable @typescript-eslint/no-explicit-any */
import Products from '../database/models/products';
import { Optional } from 'sequelize';

export default class ProductService  {

    public async create(data: Optional<any, string>): Promise<Products> {
        const product = await Products.findOne({
            where: {
                name: data.name
            }
        })
        if (product) {
            throw new Error('Produto Ja cadastrado')
        }

        try {
            const newProduct = await Products.create({
                name: data.name,
                description: data.description,
                price: data.price
            });

            return newProduct;


        } catch (error: Error | any | unknown) {
            console.error('message error: ' , error.message);
            throw error;
        }
      }

    public async getAll(): Promise<Products[]> {
          const product = await Products.findAll()
          return product
      }

    public async getById(id: number): Promise<Products | null> {
        const produto = await Products.findByPk(id);

        if (!produto) {
            throw new Error('Produto informado não cadastrado!')
        }

        return produto;
    } 
}

