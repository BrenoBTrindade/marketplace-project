/* eslint-disable @typescript-eslint/no-explicit-any */

import { Model, ModelStatic, Optional } from 'sequelize';

type PrimaryKeyAttributes<T extends Model> = {
  [K in keyof T['_attributes']]: T['_attributes'][K] extends {
    primaryKey: true;
  }
    ? K
    : never;
}[keyof T['_attributes']];

export default abstract class GenericService<T extends Model> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  public async getAll(): Promise<T[]> {
    return this.model.findAll();
  }

  public async getById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  public async create(data: Optional<T['_attributes'], PrimaryKeyAttributes<T>>): Promise<T> {
    return this.model.create(data as T['_creationAttributes']);
  }

  public async update(id: PrimaryKeyAttributes<T>,
     data: Partial<T['dataValues']>): Promise<T | null> {
    await this.model.update(data, { where: { id: id as any } });
    return this.getById(id as number);
  }

  public async delete(id: PrimaryKeyAttributes<T>): Promise<number> {
    const result = await this.model.destroy({ where: { id: id as any } });
    return result;
  }

  public async find(condition: any): Promise<T[]> {
    return this.model.findAll({ where: condition });
  }

  public async findOne(condition: any): Promise<T | null> {
    return this.model.findOne({ where: condition });
  }
}
