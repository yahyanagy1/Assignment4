import { connection } from "../../DB/db.connection.js";

export const getAllSales = async () => {
    const [sales] = await connection.execute(
        "SELECT * FROM sales"
    );

    return sales;
};

export const getSaleById = async (id) => {
    const [sales] = await connection.execute(
        "SELECT * FROM sales WHERE SaleID = ?",
        [id]
    );

    return sales;
};

export const createSale = async (saleData) => {
    const { ProductID, QuantitySold, SaleDate } = saleData;

    const [result] = await connection.execute(
        "INSERT INTO sales (ProductID, QuantitySold, SaleDate) VALUES (?, ?, ?)",
        [ProductID, QuantitySold, SaleDate]
    );

    return result;
};

export const updateSale = async (id, saleData) => {
    const { ProductID, QuantitySold, SaleDate } = saleData;

    const [result] = await connection.execute(
        `UPDATE sales
         SET ProductID = ?, QuantitySold = ?, SaleDate = ?
         WHERE SaleID = ?`,
        [ProductID, QuantitySold, SaleDate, id]
    );

    return result;
};

export const deleteSale = async (id) => {
    const [result] = await connection.execute(
        "DELETE FROM sales WHERE SaleID = ?",
        [id]
    );

    return result;
};