import { Request, Response } from "express";
import { Category } from "../../app/models/Category";


export const listCategories = async (request: Request, response: Response) => {
 try {
  const categories = await Category.find();
  return response.json(categories).status(200);
 } catch(error) {
  console.log(error); 
  return response.status(500);
  
 }
}