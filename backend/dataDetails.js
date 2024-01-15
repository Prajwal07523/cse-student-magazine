const mongoose = require("mongoose");

const MagazineScehma = new mongoose.Schema(
  {
   image:String,
   title:String,
   year:Number,
   pdf:String,
  },
  {
    collection: "Magazine_data",
  }
);

mongoose.model("Magazine_data", MagazineScehma);