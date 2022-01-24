const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type:String, required: true, maxLength:100},
    hashCode: String,
    salt: String,
    createdAt: {type: Date, default: ()=> Date.new(), inmutable: true},
    role: String
})

userSchema.methods.diHola = function(){
    console.log(`Hola, soy ${this.username}`);
}

userSchema.methods.newUser = async function newUser() {
    try{
        await this.save();
    } catch(err) {
        console.log(err);
    }
}

module.exports = mongoose.model("User", userSchema);