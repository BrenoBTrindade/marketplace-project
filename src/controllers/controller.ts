/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'sequelize';
import { Request, Response } from 'express';

class BaseController<T extends Model> {
  private service: any; // Defina o tipo adequado para a sua camada de serviço

  constructor(service: any) {
    this.service = service;
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.findAll(req.query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const data = await this.service.findById(id);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create data' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const data = await this.service.update(id, req.body);
      if (data[0] === 1) {
        res.status(200).json({ message: 'Data updated successfully' });
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update data' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const rowsDeleted = await this.service.delete(id);
      if (rowsDeleted === 1) {
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete data' });
    }
  }
}

export default BaseController;
