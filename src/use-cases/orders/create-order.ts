import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export const createOrder = async (request: Request, response: Response) => {
  const { products, table, status } = request.body;
  const order = await Order.create({
    products,
    table,
    status,
  });
  return response.send(order).status(201);
};
