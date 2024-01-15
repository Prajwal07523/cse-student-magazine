const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/magazineDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Magazine Schema
const magazineSchema = new mongoose.Schema({
  imageUrl: String,
  title: String,
  category: String,
  year: String
});

// Magazine Model
const Magazine = mongoose.model('Magazine', magazineSchema);

// Routes
app.get('/magazines', async (req, res) => {
  try {
    const magazines = await Magazine.find();
    res.json(magazines);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/magazines', async (req, res) => {
  try {
    const newMagazine = new Magazine(req.body);
    const savedMagazine = await newMagazine.save();
    res.status(201).json(savedMagazine);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
