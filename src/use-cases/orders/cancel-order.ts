import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export const cancelOrder = async (request: Request, response: Response) => {
  try {
    const { orderId } = request.params;

    await Order.findByIdAndDelete({ _id: orderId });
    return response.sendStatus(204);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};
