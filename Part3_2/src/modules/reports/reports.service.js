import { connection } from "../../DB/db.connection.js";

export const getTotalQuantitySoldPerProduct = async () => {
  const [rows] = await connection.query(`
    SELECT p.ProductID, p.ProductName, SUM(s.QuantitySold) AS TotalSold
    FROM Products p
    JOIN Sales s ON p.ProductID = s.ProductID
    GROUP BY p.ProductID, p.ProductName
  `);
  return rows;
};

export const getHighestStockProduct = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM Products ORDER BY StockQuantity DESC LIMIT 1"
  );
  return rows[0];
};

export const getSuppliersStartingWithF = async () => {
  const [rows] = await connection.query(
    "SELECT * FROM Suppliers WHERE SupplierName LIKE 'F%'"
  );
  return rows;
};

export const getNeverSoldProducts = async () => {
  const [rows] = await connection.query(`
    SELECT p.*
    FROM Products p
    LEFT JOIN Sales s ON p.ProductID = s.ProductID
    WHERE s.SaleID IS NULL
  `);
  return rows;
};

export const getSalesWithProductNames = async () => {
  const [rows] = await connection.query(`
    SELECT p.ProductName, s.QuantitySold, s.SaleDate
    FROM Sales s
    JOIN Products p ON s.ProductID = p.ProductID
  `);
  return rows;
};