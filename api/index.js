import express from "express";
import mongoose from "mongoose";
import doteenv from "dotenv";
doteenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(300, () => {
  console.log("Sever is running on port 3000");
});
