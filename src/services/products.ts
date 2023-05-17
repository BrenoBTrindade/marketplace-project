import Products from '../database/models/products';
import Iproducts from '../interfaces/Iproducts';

export default class ProductService {
    static create = async (obj : Iproducts): Promise<Products> => {
        const product = await Products.findOne({
            where: {
                name: obj.name
            }
        })
        if (product) {
            throw new Error('Produto Ja cadastrado')
        }

        try {
            const newProduct = await Products.create({
                name: obj.name,
                description: obj.description,
                price: obj.price
            });

            return newProduct;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: Error | any | unknown) {
            console.error('message error: ' , error.message);
            throw error;
        }
    }

    static findAll = async (): Promise<Products[]> => {
        const products = await Products.findAll()
        return products
    }
}
    