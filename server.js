import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import buildingsRouter from "./routes/buildings.js"; // Ensure this path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/buildings", buildingsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
