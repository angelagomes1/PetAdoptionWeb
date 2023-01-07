const mongoose = require("mongoose");

const NewAccountSchema = new mongoose.Schema({
    name:{type:String },
    password:{type:String},
},
{timestamps:true});
module.exports = mongoose.model("NewAccount",NewAccountSchema);