const mongoose = require('mongoose');
const Magazine_data = require("./data");

// Define the magazine schema
const magazineSchema = new mongoose.Schema({
  image: String,
  title: String,
  year: String,
  pdf: String,
}, { collection: 'Magazine_data' }); // Specify the collection name

// Create a model based on the schema
const Magazine = mongoose.model('Magazine', magazineSchema);

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/Magazine';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to insert magazine data
const insertMagazines = async () => {
  try {
    // Insert each magazine into the database
    for (const magazine of Magazine_data) {
      await Magazine.create(magazine);
      console.log(`Inserted magazine: ${magazine.title}`);
    }
    console.log('All magazines inserted successfully!');
  } catch (error) {
    console.error('Error inserting magazines:', error);
  } finally {
    // Close the connection after inserting data
    mongoose.disconnect();
  }
};

// Call the function to insert magazines
insertMagazines();
