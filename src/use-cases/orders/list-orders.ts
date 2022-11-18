import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export const listOrders = async (request: Request, response: Response) => {
  try {
    const orders = await Order.find()
    .sort({ createdAt: -1 })
    .populate('products.product')
    return response.json(orders).status(200);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};
