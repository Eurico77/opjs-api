import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export const listProductsByCategory = async (
  request: Request,
  response: Response
) => {
  try {
    const { categoryId } = request.params;
    console.log(categoryId);

    const products = await Product.find({ category: categoryId });
    return response.json(products).status(200);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};
