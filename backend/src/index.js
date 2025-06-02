import express from "express";
import dotenv from "dotenv";
import getAllUsers from "./models/user.js";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get("/api/users", async (_req, res) => {
  const data = await getAllUsers();
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
