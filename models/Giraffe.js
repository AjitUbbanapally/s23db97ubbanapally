const mongoose = require("mongoose")
const GiraffeSchema = mongoose.Schema({
Giraffe_breed: String,
Giraffe_age: Number,
Giraffe_heightfeet:{ type:Number,
     min:[10, "height sshould be minimum 10 feet"],
   max:[50,"Maximum height should be 50 feet"]
 }

});
module.exports = mongoose.model("Giraffe",GiraffeSchema)