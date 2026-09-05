import { connection } from "../../DB/db.connection.js";

export const getAllProducts = async () => {
  const [rows] = await connection.query("SELECT * FROM Products");
  return rows;
};

export const getProductById = async (id) => {
  const [rows] = await connection.query(
    "SELECT * FROM Products WHERE ProductID = ?",
    [id]
  );
  return rows[0];
};

export const createProduct = async (data) => {
  const { ProductName, Price, StockQuantity, Supplier_ID } = data;
  const [result] = await connection.query(
    "INSERT INTO Products (ProductName, Price, StockQuantity, Supplier_ID) VALUES (?, ?, ?, ?)",
    [ProductName, Price, StockQuantity, Supplier_ID]
  );
  return result;
};

export const updateProduct = async (id, data) => {
  const { ProductName, Price, StockQuantity, Supplier_ID } = data;
  const [result] = await connection.query(
    "UPDATE Products SET ProductName = ?, Price = ?, StockQuantity = ?, Supplier_ID = ? WHERE ProductID = ?",
    [ProductName, Price, StockQuantity, Supplier_ID, id]
  );
  return result;
};

export const deleteProduct = async (id) => {
  const [result] = await connection.query(
    "DELETE FROM Products WHERE ProductID = ?",
    [id]
  );
  return result;
};