const mongoose = require("mongoose")
const GiraffeSchema = mongoose.Schema({
Giraffe_breed: String,
Giraffe_age: Number,
Giraffe_heightfeet: Number,
});
module.exports = mongoose.model("Giraffe",GiraffeSchema)