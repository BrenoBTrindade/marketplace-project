import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'root',
  database: 'marketplace_db',
  host: process.env.MYSQLHOST || 'localhost',
  port: Number(process.env.MYSQLPORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
