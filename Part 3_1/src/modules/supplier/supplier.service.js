import { connection } from "../../DB/db.connection.js";

export const getAllSuppliers = async () => {
    const [suppliers] = await connection.execute(
        "SELECT * FROM suppliers"
    );

    return suppliers;
};

export const getSupplierById = async (id) => {
    const [suppliers] = await connection.execute(
        "SELECT * FROM suppliers WHERE SupplierID = ?",
        [id]
    );

    return suppliers;
};

export const createSupplier = async (supplierData) => {
    const { SupplierName, ContactNumber } = supplierData;

    const [result] = await connection.execute(
        "INSERT INTO suppliers (SupplierName, ContactNumber) VALUES (?, ?)",
        [SupplierName, ContactNumber]
    );

    return result;
};

export const updateSupplier = async (id, supplierData) => {
    const { SupplierName, ContactNumber } = supplierData;

    const [result] = await connection.execute(
        `UPDATE suppliers
         SET SupplierName = ?, ContactNumber = ?
         WHERE SupplierID = ?`,
        [SupplierName, ContactNumber, id]
    );

    return result;
};

export const deleteSupplier = async (id) => {
    const [result] = await connection.execute(
        "DELETE FROM suppliers WHERE SupplierID = ?",
        [id]
    );

    return result;
};