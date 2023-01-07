const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const adoptionRoute = require("./routes/adopt");
const stripeRoute = require("./routes/stripe");
const newaccountRoute = require("./routes/newaccount");
//const cors = require("cors")

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL)
    .then(() =>console.log ("DBConnection Successfull!!"))
.catch((err)=>{
    console.log(err);
});
    app.use(cors());
    app.use(express.json());
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/products", productRoute);
    app.use("/api/carts", cartRoute);
    app.use("/api/orders", orderRoute);
    app.use("/api/adoption",adoptionRoute);
    app.use("/api/checkout",stripeRoute);
    app.use("/api/newaccount",newaccountRoute);


app.listen(process.env.PORT || 5000, ()=> {
    console.log("Backend server is running!");
});