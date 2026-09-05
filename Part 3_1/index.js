import express from 'express';
import chalk from 'chalk';
const app = express();
app.use(express.json());

import {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    removeProduct
} from "./src/modules/products/product.controller.js";

import {
    getSuppliers,
    getSupplier,
    addSupplier,
    editSupplier,
    removeSupplier
} from "./src/modules/supplier/supplier.controller.js";

import {
    getSales,
    getSale,
    addSale,
    editSale,
    removeSale
} from "./src/modules/sale/sale.controller.js";

// Products
app.get("/products", getProducts);
app.get("/products/:id", getProduct);
app.post("/products", addProduct);
app.put("/products/:id", editProduct);
app.delete("/products/:id", removeProduct);

// Suppliers
app.get("/suppliers", getSuppliers);
app.get("/suppliers/:id", getSupplier);
app.post("/suppliers", addSupplier);
app.put("/suppliers/:id", editSupplier);
app.delete("/suppliers/:id", removeSupplier);

// Sales
app.get("/sales", getSales);
app.get("/sales/:id", getSale);
app.post("/sales", addSale);
app.put("/sales/:id", editSale);
app.delete("/sales/:id", removeSale);





app.listen(3000,()=>{
    console.log(chalk.green('Server is running on port 3000'));
})