import express from "express";
import chalk from "chalk";
import productRoutes from "./src/modules/product/product.routes.js";
import supplierRoutes from "./src/modules/supplier/supplier.routes.js";
import saleRoutes from "./src/modules/sale/sale.routes.js";
import adminRoutes from "./src/modules/admin/admin.routes.js";
import reportsRoutes from "./src/modules/reports/reports.routes.js";

const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/suppliers", supplierRoutes);
app.use("/sales", saleRoutes);
app.use("/admin", adminRoutes);
app.use("/reports", reportsRoutes);

app.listen(3000, () => {
  console.log(chalk.green("server is running on port 3000"));
});