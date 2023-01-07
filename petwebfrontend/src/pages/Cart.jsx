
import styled from "styled-components"
import Announcement  from "../components/Announcement";
import NavBar  from "../components/NavBar";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import {Link, useNavigate} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import {useSelector} from "react-redux"
const KEY= process.env.REACT_APP_STORE;
const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled " && "none"};
    background-color: ${props=>props.type==="filled " ? "black" :"transparent"};
    color: ${props=>props.type==="filled " && "white"};
`;
const TopTexts= styled.div`
     ${mobile({display:"none"})}
`;
const TopText= styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const Info = styled.div`
    flex: 3;
`;
const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`;
const Image=styled.img`
    width: 200px;

`;
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName=styled.span`
    
`;
const ProductId=styled.span`
    
`;
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`;
const ProductSize=styled.span`
    
`;
const PriceDetail=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`;
const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`;
const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`;
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle =styled.h1`
    font-weight: 200;
`;
const SummaryItem =styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type ==="total" && "500"};
    font-size: ${props=>props.type ==="total" && "24px"};
`;
const SummaryItemText =styled.span`
    
`;
const SummaryItemPrice =styled.span`
    
`;
const Button =styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;
const Cart = (item) => {
    const navigate = useNavigate();
    const [stripeToken, setStripeToken]= useState(null);
    const cart = useSelector((state)=>state.cart);
    const [quantity, setQuantity]= useState(1);
 const onToken=(token)=>{
    setStripeToken(token);
 };
 console.log(stripeToken)
//  useEffect(()=>{
//     const makeRequest =async()=>{
//         try{
//             const res=await userRequest.post("checkout/payment",{
//                 tokenId: stripeToken.id,
//                 amount:500,
//             });
//             navigate.push("/success",{
//                 stripeData: res.data,
//                 products:cart,
//             });
//         }catch{}
//     };
//     stripeToken && makeRequest();
//  },[stripeToken,cart.total,navigate]);
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
               <Link to="/productlist"> <TopButton>CONTINUE SHOPPING</TopButton></Link>
                {/* <TopTexts>
                    <TopText>SHOPPING BAG(2)</TopText>
                    <TopText>YOUR WISHLIST(0)</TopText>
                </TopTexts> */}
                <StripeCheckout name="Purrs&Woofs"
                            image=""
                            billingAddress
                            shippingAddress
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                             >
                <TopButton type="filled">CHECKOUT NOW</TopButton></StripeCheckout>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(item=>(

                    
                    <Product>
                    <ProductDetail>
                        <Image src={item.img}/>
                        <Details>
                            <ProductName><b>PRODUCT;</b>{item.title}</ProductName>
                            <ProductId><b>ID</b>{item._id}</ProductId>
                            <ProductColor color={item.color}/>
                            <ProductSize><b>SIZE:</b>{item.size}</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <ProductAmount>{item.quantity}</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>${item.price*item.quantity}</ProductPrice>
                        </PriceDetail></Product>
                         ))}
                        <Hr/>
                        </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>subtotal</SummaryItemText>
                        <SummaryItemPrice>$
                            {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>estimated shipping</SummaryItemText>
                        <SummaryItemPrice>$20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>shipping discount</SummaryItemText>
                        <SummaryItemPrice>-$20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                        <SummaryItemText >total</SummaryItemText>
                        <SummaryItemPrice>$
                            {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout name="Purrs&Woofs"
                            image=""
                            billingAddress
                            shippingAddress
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                             >
                        <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart