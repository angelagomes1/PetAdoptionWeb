const NewAccount = require("../models/NewAccount");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();
router.post("/",async (req, res)=>{

    console.log("req --->", req.body);
    const newNewAccount = new NewAccount({
        name:req.body.name,
        password:req.body.password,
    });
    try{
    const savedNewAccount= await newNewAccount.save();
    res.status(200).json(savedNewAccount)
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports =router;