import { connection } from "../../DB/db.connection.js";

export const getAllSuppliers = async () => {
  const [rows] = await connection.query("SELECT * FROM Suppliers");
  return rows;
};

export const getSupplierById = async (id) => {
  const [rows] = await connection.query(
    "SELECT * FROM Suppliers WHERE SupplierID = ?",
    [id]
  );
  return rows[0];
};

export const createSupplier = async (data) => {
  const { SupplierName, ContactNumber } = data;
  const [result] = await connection.query(
    "INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES (?, ?)",
    [SupplierName, ContactNumber]
  );
  return result;
};

export const updateSupplier = async (id, data) => {
  const { SupplierName, ContactNumber } = data;
  const [result] = await connection.query(
    "UPDATE Suppliers SET SupplierName = ?, ContactNumber = ? WHERE SupplierID = ?",
    [SupplierName, ContactNumber, id]
  );
  return result;
};

export const deleteSupplier = async (id) => {
  const [result] = await connection.query(
    "DELETE FROM Suppliers WHERE SupplierID = ?",
    [id]
  );
  return result;
};