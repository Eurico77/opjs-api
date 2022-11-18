import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export const createProducts = async (request: Request, response: Response) => {
  try {
    const imagePath = request.file?.filename;
    const { name, description, price, ingredients, category } = request.body;

    const products = await Product.create({
      name,
      description,
      price: Number(price),
      imagePath,
      ingredients: ingredients ?  JSON.parse(ingredients) : [],
      category,
    });

    return response.json(products).status(201);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};
