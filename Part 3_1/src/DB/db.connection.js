import mysql2 from "mysql2/promise";

export const connection = await mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'retail_store',
});
