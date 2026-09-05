import express from "express";
import {
  addCategory,
  removeCategory,
  changeContactNumber,
  setProductNameNotNull,
  seedData,
  setBreadPrice,
  removeEggs,
  createManagerUser,
  revokeManagerUpdate,
  grantManagerDeleteSales,
} from "./admin.controller.js";

const router = express.Router();

router.post("/add-category-column", addCategory);
router.post("/remove-category-column", removeCategory);
router.post("/alter-contact-number", changeContactNumber);
router.post("/set-productname-notnull", setProductNameNotNull);
router.post("/seed-data", seedData);
router.put("/update-bread-price", setBreadPrice);
router.delete("/delete-eggs", removeEggs);
router.post("/create-store-manager", createManagerUser);
router.post("/revoke-update-permission", revokeManagerUpdate);
router.post("/grant-delete-sales", grantManagerDeleteSales);

export default router;