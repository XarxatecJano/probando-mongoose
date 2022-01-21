const mongoose = require("mongoose");

const connection = async () =>{
    await mongoose.connect("mongodb://activa:qwerty33@localhost:27017/activa");
}

module.exports = connection;