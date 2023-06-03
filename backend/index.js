const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const studentRouter = require("./routes/StudentRouter");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("connect to database");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/student", studentRouter);
