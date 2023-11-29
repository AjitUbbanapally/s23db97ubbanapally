const mongoose = require("mongoose")
const GiraffeSchema = mongoose.Schema({
    Giraffe_breed: {
        type: String,
        required: true, // here Giraffe breed is a necessary field
      },
Giraffe_age: {
    type: Number,
    min: [0, "The Giraffe Age should be a positive number"], // assuming age should be a non-negative number
  },
Giraffe_heightfeet:{ type:Number,
     min:[10, "height should be minimum 10 feet"],
   max:[50,"Maximum height should be 50 feet"]
 }

});
module.exports = mongoose.model("Giraffe",GiraffeSchema)