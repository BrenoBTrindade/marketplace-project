import { Model, DataTypes } from 'sequelize';
import db from '.';

class Users extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize: db,
    modelName: 'Users',
    tableName: 'users',
    defaultScope: {
        attributes: {
            exclude: ['password']
        }
    }

  }
);

export default Users;