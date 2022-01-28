const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    editionDate: Date
})

module.exports = mongoose.model("Book", bookSchema);