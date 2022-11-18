import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export const listProducts = async (request: Request, response: Response) => {
  try {
    const products = await Product.find();
    return response.json(products).status(200);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};
