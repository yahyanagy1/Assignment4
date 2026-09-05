import express from "express";
import {
  totalQuantitySold,
  highestStock,
  suppliersF,
  neverSold,
  salesWithProducts,
} from "./reports.controller.js";

const router = express.Router();

router.get("/total-quantity-sold", totalQuantitySold);
router.get("/highest-stock", highestStock);
router.get("/suppliers-starting-f", suppliersF);
router.get("/never-sold-products", neverSold);
router.get("/sales-with-products", salesWithProducts);

export default router;