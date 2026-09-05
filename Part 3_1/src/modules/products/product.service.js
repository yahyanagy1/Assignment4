import { connection } from "../../DB/db.connection.js";

export const getAllProducts = async () => {
    const [products] = await connection.execute(
        "SELECT * FROM products"
    );

    return products;
};

export const getProductById = async (id) => {
    const [products] = await connection.execute(
        "SELECT * FROM products WHERE ProductID = ?",
        [id]
    );

    return products;
};

export const createProduct = async (productData) => {
    const { ProductName, Price, StockQuantity, SupplierID } = productData;

    const [result] = await connection.execute(
        "INSERT INTO products (ProductName, Price, StockQuantity, Supplier_ID) VALUES (?, ?, ?, ?)",
        [ProductName, Price, StockQuantity, SupplierID]
    );

    return result;
};

export const updateProduct = async (id, productData) => {
    const { ProductName, Price, StockQuantity, SupplierID } = productData;

    const [result] = await connection.execute(
        `UPDATE products
         SET ProductName = ?, Price = ?, StockQuantity = ?, Supplier_ID = ?
         WHERE ProductID = ?`,
        [ProductName, Price, StockQuantity, SupplierID, id]
    );

    return result;
};

export const deleteProduct = async (id) => {
    const [result] = await connection.execute(
        "DELETE FROM products WHERE ProductID = ?",
        [id]
    );

    return result;
};