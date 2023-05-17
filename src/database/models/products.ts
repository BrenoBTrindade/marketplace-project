import { Model, DataTypes } from 'sequelize';
import db from '.';

class Products extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public Price!: string;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
  },
  {
    sequelize: db,
    modelName: 'Products',
    tableName: 'products',
    timestamps: false,
  }
);

export default Products;
