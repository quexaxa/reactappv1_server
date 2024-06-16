import express from "express";
import cors from "cors";
import userRouter from "./routes/user.router.js";
import serviceRouter from "./routes/servcie.router.js";
import categoryRouter from "./routes/category.router.js";
import feedbackRouter from "./routes/feedback.route.js";
import subcategoryRouter from "./routes/subcategory.router.js";
import statusRouter from "./routes/status.route.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:3000", // укажите URL вашего фронтенда
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:root@agencysite.ebjehqi.mongodb.net/agencySite?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use("/api/user", userRouter);
app.use("/api/service", serviceRouter);
app.use("/api/category", categoryRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/subcategory", subcategoryRouter);
app.use("/api/status", statusRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
