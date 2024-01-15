
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());



// MongoDB connection
const mongoUrl = "mongodb://localhost:27017/Magazine";
mongoose.connect(mongoUrl, {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log("Connected to database");
}).catch((e) => console.log(e));

// Importing schema
require("./dataDetails");
const MagazineData = mongoose.model("Magazine_data");

app.get("/", async (req, res) => {
res.send("Server is running successfully!");
});

app.listen(5000, () => {
console.log("Server started on port 5000");
});

// Endpoint to add magazine data
app.post("/add-magazine", async (req, res) => {
try {
const {  title, year, imageUrl, pdfUrl } = req.body;
const magazine = new MagazineData({
title,
year,
image: imageUrl,
pdf: pdfUrl
});
await magazine.save();
res.json({ status: "ok", data: magazine });
} catch (error) {
  res.status(500).json({ status: "error", message: error.message });
  }
  });
  



  // Endpoint to get magazine data
  app.get("/get-magazines", async (req, res) => {
  try {
  const magazines = await MagazineData.find({});
  res.json({ status: "ok", data: magazines });
  } catch (error) {
  res.status(500).json({ status: "error", message: error.message });
  }
  });

