import express from "express";
import mongoose from "mongoose";
import doteenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
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

app.use(express.json());

app.listen(3000, () => {
  console.log("Sever is running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
