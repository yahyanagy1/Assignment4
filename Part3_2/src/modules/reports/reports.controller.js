import {
  getTotalQuantitySoldPerProduct,
  getHighestStockProduct,
  getSuppliersStartingWithF,
  getNeverSoldProducts,
  getSalesWithProductNames,
} from "./reports.service.js";

export const totalQuantitySold = async (req, res) => {
  const data = await getTotalQuantitySoldPerProduct();
  res.status(200).json({ message: "Total quantity sold per product", data });
};

export const highestStock = async (req, res) => {
  const data = await getHighestStockProduct();
  res.status(200).json({ message: "Product with highest stock", data });
};

export const suppliersF = async (req, res) => {
  const data = await getSuppliersStartingWithF();
  res.status(200).json({ message: "Suppliers starting with F", data });
};

export const neverSold = async (req, res) => {
  const data = await getNeverSoldProducts();
  res.status(200).json({ message: "Products never sold", data });
};

export const salesWithProducts = async (req, res) => {
  const data = await getSalesWithProductNames();
  res.status(200).json({ message: "Sales with product names", data });
};