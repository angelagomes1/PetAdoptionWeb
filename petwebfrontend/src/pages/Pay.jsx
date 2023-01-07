import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

 const KEY ="pk_test_51LYZxxSGO73UEB0GyiLowRPin7Q1GJLnesYlhveeTEe5pdNwCfM02Z7dBLGDuxKi5rmN8O2zhIlsbWL8VOlTnB9T00IQnonLQL"
const Pay =() =>{
     const [stripeToken,setStripeToken] = useState(null)
    const onToken=(token)=>{
     setStripeToken(token);
    };
     useEffect(()=>{
 const makeRequest =async()=>{
     try{
         const res= await axios.post("http://localhost:5000/api/checkout/payment",{
             method:"POST",
             tokenId:stripeToken.id,
             amount:2000,
         }
         );
         console.log(res.data)
     }catch(err){
         console.log(err)
     }
 }; 
    stripeToken && makeRequest();
     },[stripeToken]);
    return(
        <div
        style={{
            height:"100vh",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <StripeCheckout name="Purrs&Woofs"
            image=""
            billingAddress
            shippingAddress
            description="Your total is 20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
        <button
        style={{
            border:"none",
            width: 120,
            borderRadius:5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight:"600",
            cursor: "pointer",
        }}>Pay Now</button>
        </StripeCheckout>
        </div>

    )
}
export default Pay;