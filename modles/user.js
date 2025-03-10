
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017")

const userschema = mongoose.Schema({
    name: String,
    username: String,
    imgu: String
})

module.exports = mongoose.model("user", userschema)