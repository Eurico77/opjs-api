import { Request, Response } from 'express';
import { Order } from '../../app/models/Order';

export const changeOrderStatus = async (
  request: Request,
  response: Response
) => {
  try {
    const { orderId } = request.params;
    const { status } = request.body;
    console.log(status);

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return response.status(400).json({ message: 'Invalid status' });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    return response.sendStatus(204);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};
