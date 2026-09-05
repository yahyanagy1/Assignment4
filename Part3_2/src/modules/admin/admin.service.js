import { connection } from "../../DB/db.connection.js";

export const addCategoryColumn = async () => {
  await connection.query("ALTER TABLE Products ADD COLUMN Category VARCHAR(255)");
};

export const removeCategoryColumn = async () => {
  await connection.query("ALTER TABLE Products DROP COLUMN Category");
};

export const alterContactNumber = async () => {
  await connection.query("ALTER TABLE Suppliers MODIFY ContactNumber VARCHAR(15)");
};

export const addNotNullProductName = async () => {
  await connection.query("ALTER TABLE Products MODIFY ProductName VARCHAR(255) NOT NULL");
};

export const seedInitialData = async () => {
  const [supplierResult] = await connection.query(
    "INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES (?, ?)",
    ["FreshFoods", "01001234567"]
  );
  const supplierId = supplierResult.insertId;

  await connection.query(
    "INSERT INTO Products (ProductName, Price, StockQuantity, Supplier_ID) VALUES (?, ?, ?, ?)",
    ["Milk", 15.00, 50, supplierId]
  );
  await connection.query(
    "INSERT INTO Products (ProductName, Price, StockQuantity, Supplier_ID) VALUES (?, ?, ?, ?)",
    ["Bread", 10.00, 30, supplierId]
  );
  await connection.query(
    "INSERT INTO Products (ProductName, Price, StockQuantity, Supplier_ID) VALUES (?, ?, ?, ?)",
    ["Eggs", 20.00, 40, supplierId]
  );

  const [milkProduct] = await connection.query(
    "SELECT ProductID FROM Products WHERE ProductName = 'Milk'"
  );
  await connection.query(
    "INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES (?, ?, ?)",
    [milkProduct[0].ProductID, 2, "2025-05-20"]
  );

  return { message: "Seed data inserted successfully" };
};

export const updateBreadPrice = async () => {
  const [result] = await connection.query(
    "UPDATE Products SET Price = 25.00 WHERE ProductName = 'Bread'"
  );
  return result;
};

export const deleteEggsProduct = async () => {
  const [result] = await connection.query(
    "DELETE FROM Products WHERE ProductName = 'Eggs'"
  );
  return result;
};

export const createStoreManagerUser = async () => {
  await connection.query("CREATE USER IF NOT EXISTS 'store_manager'@'localhost' IDENTIFIED BY 'Password123!'");
  await connection.query("GRANT SELECT, INSERT, UPDATE ON retail_store.* TO 'store_manager'@'localhost'");
  await connection.query("FLUSH PRIVILEGES");
  return { message: "store_manager created with SELECT, INSERT, UPDATE permissions" };
};

export const revokeUpdatePermission = async () => {
  await connection.query("REVOKE UPDATE ON retail_store.* FROM 'store_manager'@'localhost'");
  await connection.query("FLUSH PRIVILEGES");
  return { message: "UPDATE permission revoked from store_manager" };
};

export const grantDeleteOnSales = async () => {
  await connection.query("GRANT DELETE ON retail_store.Sales TO 'store_manager'@'localhost'");
  await connection.query("FLUSH PRIVILEGES");
  return { message: "DELETE permission on Sales granted to store_manager" };
};