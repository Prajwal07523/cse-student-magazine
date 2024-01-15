const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoUrl = "mongodb+srv://minip8681:kle123@cluster0.qbrivbz.mongodb.net/kletech_database";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database");
}).catch((e) => console.log(e));

// Define the magazine schema
const magazineSchema = new mongoose.Schema({
  title: String,
  year: String,
  image: String,
  pdf: String,
}, { collection: 'literature_registration' }); // Specify the new collection name

// Create a model based on the schema
const LiteratureRegistration = mongoose.model('literature_registration', magazineSchema);

// Endpoint to add magazine data
app.post("/add-magazine", async (req, res) => {
  try {
    const { title, year, imageUrl, pdfUrl } = req.body;
    const magazine = new LiteratureRegistration({
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
    const magazines = await LiteratureRegistration.find({});
    res.json({ status: "ok", data: magazines });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
