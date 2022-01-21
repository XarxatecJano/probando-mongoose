const express = require("express");
const router = require("./routes/routes");
const mongoose = require("mongoose");
const User = require("./model/User");
const connection = require("./config/connection");


const result = connection();

/*const user = new User({username: "Jano", hashCode: "ajsdjvpi", salt: "poajdp", role: "admin"});
console.log(user);*/

async function newUser(name, hashCode, salt, createdAt, role) {
    try{
        const user = new User({username: name, hashCode: hashCode, salt: salt, role: role});
        console.log(user);
        await user.save();
    } catch(err) {
        console.log(err);
    }
}

newUser("Jano", "wdevhiow", "pioavdsjiopavjh", "01-21-2022", "admin");


const app = express();

app.use("/", router);

app.listen(3000, ()=> {console.log("Listening at port 3000...")});