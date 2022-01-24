const path = require("path");
const mongoose = require("mongoose");
const User = require("./model/User");
const connection = require("./config/connection");



exports.sendLandingPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
}

exports.getNewUserPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public", "newUser.html"));
}

exports.insertNewUser = async (req, res) => {
    const result = connection();
    const date = new Date();
    const user = new User({username:req.body.username, hashCode:req.body.password, salt:"", gender: "M"});
    
    user.newUser();
    user.diHola();
    
    //User.newUser(req.body.username, req.body.password, "", date, "admin");
    res.send("usuario grabado con éxito");
}