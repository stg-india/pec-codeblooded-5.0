import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!");
      } catch (error) {
        console.log(error);
      }
}

//const mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/ConverterDB")

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, ()=>{
    connect();
    console.log("Backend server is up and running!");
})