const mongoose = require("mongoose");

const MagazineScehma = new mongoose.Schema(
  {
   image:String,
   title:String,
   year:Number,
   pdf:String,
  },
  {
    collection: "literature_registration",
  }
);

mongoose.model("literature_registration", MagazineScehma);