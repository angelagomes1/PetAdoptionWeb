import { Badge} from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components'
import{mobile} from "../responsive"
//import {useSelector} from "react-redux"
import {Link} from "react-router-dom";
import popularProducts from "../data";
import { useSelector } from 'react-redux';
    

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`flex: 1;
display:flex;
align-items: center;`
;
const Language =styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`;
    

const Center = styled.div`
flex: 1;
text-align:center;`
const Logo= styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`;
const Right = styled.div`flex: 1;
display:flex;
align-items:center;
justify-content: flex-end;
${mobile({flex:"2", justifyContent:"center"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px" , marginLeft:"25px"})}
`;
const NavBar = () => {

    const quantity = useSelector(state=> state.cart.quantity)
    console.log(quantity)
// const [query,setQuery]= useState("");
// console.log(query)
//console.log(popularProducts.filter(popularProducts=>popularProducts.id.includes("1")))
  return (
    <Container>
        <Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer>
        <Input placeholder='Search' className="search" 
        //onChange={e=> setQuery(e.target.value)}
        />
        {/* {popularProducts.map((products)=>(
            <li key={products.id} className="listItem">{products.id}</li>
        ))} */}
        <Search style={{color:"gray",fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center><Link to="/"><Logo>Purrs&Woffs.</Logo></Link></Center>
        <Right> 
        <Link to="/register"><MenuItem >REGISTER</MenuItem></Link>
        <Link to="/login"><MenuItem >SIGN IN</MenuItem></Link>
        <Link to="/adoptionpage"><MenuItem >ADOPTION</MenuItem></Link> 
        <Link to="/rehome"><MenuItem >REHOME</MenuItem></Link> 

        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
        <Link to="/cart"><ShoppingCartOutlined /></Link>
        </Badge> </MenuItem>
        </Right>
        </Wrapper>
        </Container>
  )
}

export default NavBar