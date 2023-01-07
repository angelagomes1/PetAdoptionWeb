const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{type:String , required:true, unique:true},
    desc:{type:String, required:true,},
    img: {
        data: Buffer,
        contentType:String
    },
    categories: {type:Array},
    size: {type:Array},
    color: {type:Array },
    price:{type:Number, required:true },
    inStock:{type:Boolean, default:true},
},
{timestamps:true});
module.exports = mongoose.model("Product",ProductSchema);