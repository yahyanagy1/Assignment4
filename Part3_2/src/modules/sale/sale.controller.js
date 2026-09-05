import {
  getAllSales,
  getSalesByProductId,
  createSale,
} from "./sale.service.js";

export const getSales = async (req, res) => {
  const sales = await getAllSales();
  res.status(200).json({
    message: "Sales fetched successfully",
    sales,
  });
};

export const getProductSales = async (req, res) => {
  const sales = await getSalesByProductId(req.params.productId);
  res.status(200).json({
    message: "Product sales fetched successfully",
    sales,
  });
};

export const addSale = async (req, res) => {
  const result = await createSale(req.body);
  res.status(201).json({
    message: "Sale recorded successfully",
    result,
  });
};