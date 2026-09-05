import {
  addCategoryColumn,
  removeCategoryColumn,
  alterContactNumber,
  addNotNullProductName,
  seedInitialData,
  updateBreadPrice,
  deleteEggsProduct,
  createStoreManagerUser,
  revokeUpdatePermission,
  grantDeleteOnSales,
} from "./admin.service.js";

export const addCategory = async (req, res) => {
  await addCategoryColumn();
  res.status(200).json({ message: "Category column added" });
};

export const removeCategory = async (req, res) => {
  await removeCategoryColumn();
  res.status(200).json({ message: "Category column removed" });
};

export const changeContactNumber = async (req, res) => {
  await alterContactNumber();
  res.status(200).json({ message: "ContactNumber changed to VARCHAR(15)" });
};

export const setProductNameNotNull = async (req, res) => {
  await addNotNullProductName();
  res.status(200).json({ message: "NOT NULL constraint added to ProductName" });
};

export const seedData = async (req, res) => {
  const result = await seedInitialData();
  res.status(201).json(result);
};

export const setBreadPrice = async (req, res) => {
  const result = await updateBreadPrice();
  res.status(200).json({ message: "Bread price updated to 25.00", result });
};

export const removeEggs = async (req, res) => {
  const result = await deleteEggsProduct();
  res.status(200).json({ message: "Eggs product deleted", result });
};

export const createManagerUser = async (req, res) => {
  const result = await createStoreManagerUser();
  res.status(201).json(result);
};

export const revokeManagerUpdate = async (req, res) => {
  const result = await revokeUpdatePermission();
  res.status(200).json(result);
};

export const grantManagerDeleteSales = async (req, res) => {
  const result = await grantDeleteOnSales();
  res.status(200).json(result);
};