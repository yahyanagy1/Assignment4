import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./product.service.js";

export const getProducts = async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json({
    message: "Products fetched successfully",
    products,
  });
};

export const getProduct = async (req, res) => {
  const product = await getProductById(req.params.id);
  res.status(200).json({
    message: "Product fetched successfully",
    product,
  });
};

export const addProduct = async (req, res) => {
  const result = await createProduct(req.body);
  res.status(201).json({
    message: "Product created successfully",
    result,
  });
};

export const editProduct = async (req, res) => {
  const result = await updateProduct(req.params.id, req.body);
  res.status(200).json({
    message: "Product updated successfully",
    result,
  });
};

export const removeProduct = async (req, res) => {
  const result = await deleteProduct(req.params.id);
  res.status(200).json({
    message: "Product deleted successfully",
    result,
  });
};