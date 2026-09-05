import { connection } from "../../DB/db.connection.js";

export const getAllSales = async () => {
  const [rows] = await connection.query("SELECT * FROM Sales");
  return rows;
};

export const getSalesByProductId = async (productId) => {
  const [rows] = await connection.query(
    "SELECT * FROM Sales WHERE ProductID = ?",
    [productId]
  );
  return rows;
};

export const createSale = async (data) => {
  const { ProductID, QuantitySold, SaleDate } = data;
  const [result] = await connection.query(
    "INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES (?, ?, ?)",
    [ProductID, QuantitySold, SaleDate]
  );
  return result;
};