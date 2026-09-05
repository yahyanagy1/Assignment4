import express from "express";
import { getSales, getProductSales, addSale } from "./sale.controller.js";

const router = express.Router();

router.get("/", getSales);
router.get("/product/:productId", getProductSales);
router.post("/", addSale);

export default router;