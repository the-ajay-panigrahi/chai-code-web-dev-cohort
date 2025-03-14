// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import "dotenv/config";
import cors from "cors";
import db from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Haanji..home page mein ho!");
});

app.get("/ajay", (req, res) => {
  res.send("Ajay ko dekh rahe hoo.");
});

db();

app.use("/api/v1/users", userRoutes);
app.listen(port, () => {
  console.log("Oh ji, Lo ji, Main hoon manmoji", port);
});
