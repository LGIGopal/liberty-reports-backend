const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


//middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log("Path", req.path);
  // console.log("Method",req.method);
  next();
});

//routes

const reportsRoutes = require("./routes/dashboard/reports");

app.use("/api/v1", reportsRoutes);

//db connection

mongoose.connect(MONGO_URI).then(()=>{
  console.log("MongoDB is connected..")
}).catch((error)=>{
  console.log("DB Connection error: ",error)
})

// server listem
app.listen(PORT, () => {
  try {
    console.log(`Server is listening on PORT ${PORT}`);
  } catch (error) {
    console.log("Server Port Error", error);
  }
});
