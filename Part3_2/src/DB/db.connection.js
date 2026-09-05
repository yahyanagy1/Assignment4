import mysql2 from "mysql2/promise";

// خطوة 1: اتصال مؤقت من غير تحديد database، بس عشان نقدر ننشئها لو مش موجودة
const initConnection = await mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

await initConnection.query(`CREATE DATABASE IF NOT EXISTS retail_store`);
await initConnection.end(); // نقفل الاتصال المؤقت ده، خلص شغله

// خطوة 2: الـ Pool الحقيقي اللي هنستخدمه في باقي المشروع، متصل بالداتابيز أكيد إنها موجودة
export const connection = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "retail_store",
});