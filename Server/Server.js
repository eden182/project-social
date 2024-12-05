import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/UserRoute.js";
import postRoutes from "./Routes/PostRoute.js";
import messageRoutes from "./Routes/MessageRoute.js";
import { v2 as cloudinary } from "cloudinary";
import { app, server } from "./Socket.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Client/"))); // update the directory place

  // react app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Client", "index.html")); // update to scope the react app we are using
  });
}

server.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
