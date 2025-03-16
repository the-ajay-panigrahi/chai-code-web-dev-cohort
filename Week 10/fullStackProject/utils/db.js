import mongoose from "mongoose";
// import dotenv from "dotenv";
// import "dotenv/config";
 
const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((error) => {
      console.log(`Failed to connect mongodb ${error}`);
    });
};

export default db;
