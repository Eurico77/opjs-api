import { Router } from "express";
import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";


import { CreateCategory } from "./use-cases/categories/create-category";
import { listCategories } from "./use-cases/categories/list-category";
import { createProducts } from "./use-cases/products/create-products";
import { listProducts } from "./use-cases/products/list-products";
import { listProductsByCategory } from "./use-cases/categories/list-product-by-category";
import { listOrders } from "./use-cases/orders/list-orders";
import { createOrder } from "./use-cases/orders/create-order";
import { changeOrderStatus } from "./use-cases/orders/change-order-status";
import { cancelOrder } from "./use-cases/orders/cancel-order";


export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${crypto.randomUUID()}-${file.originalname}`);
    },
  }),
})

router.get("/categories", listCategories);
router.post("/categories", CreateCategory);
router.get("/products", listProducts);
router.post("/products", upload.single('image'), createProducts);
router.get("/categories/:categoryId/products", listProductsByCategory);
router.get("/orders", listOrders);
router.post("/orders", createOrder);
router.patch("/orders/:orderId", changeOrderStatus);
router.delete("/orders/:orderId/", cancelOrder);