import { Request, Response } from 'express';
import { Category } from '../../app/models/Category';

export const CreateCategory = async (request: Request, response: Response) => {
  const { name, icon } = request.body;
  const category = await Category.create({ name, icon });
  return response.send(category).status(201);
};
