import pool from "../db/index.js";
export default async function getAllUsers() {
  const res = await pool.query("SELECT * FROM users");
  return res.rows;
}
