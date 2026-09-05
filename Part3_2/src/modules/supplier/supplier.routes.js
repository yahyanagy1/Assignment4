import express from "express";
import {
  getSuppliers,
  getSupplier,
  addSupplier,
  editSupplier,
  removeSupplier,
} from "./supplier.controller.js";

const router = express.Router();

router.get("/", getSuppliers);
router.get("/:id", getSupplier);
router.post("/", addSupplier);
router.put("/:id", editSupplier);
router.delete("/:id", removeSupplier);

export default router;