
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import { CheckCircleOutline } from "@mui/icons-material";
import { mobile } from "../responsive";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link, useNavigate } from "react-router-dom";
import React, {useffect, useState}  from "react";
import { useEffect } from "react";
const Container = styled.div`
    
`;const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    ${mobile({padding:"10px",flexDirection:"column"})}
`;
const Hr =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const ImageContainer = styled.div`
    flex: 1;
    justify-content: center;
    display: flex;
`;
const Image = styled.img`
     width: 70%;
     height: 70vh;
     object-fit: cover;
     ${mobile({height:"40%"})}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
    font-weight: 500;
    justify-content: center;
    display: flex;
    color: #444343;
`;
const List=styled.ul`
    margin: 0;
    flex: 1;
    min-width: 40%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    display: inline-table;
`;
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
    justify-content: center;
    display: flex;
`;

const PetsInfo = () => {
    const navigate = useNavigate();
    const _id = window.location.pathname.split("/")[2];
    const [pet,setPet]= useState({});
   
   const fetchData=()=>{
       fetch(`http://localhost:5000/api/adoption/find/`+_id)
       .then((res)=>{
         return res.json();
       }).then((data)=>{
        console.log("-------", data);
        setPet(data);
       })
     }
     useEffect(()=>{
       fetchData();
     },[pet == null ])
     

     console.log("petsinfo:", pet);
  
  return (
    <Container>
        <NavBar/>
        <Announcement/>
            <Title>ADOPT {pet.name}</Title>
            <Wrapper>
            <ImageContainer>
                <Image src={pet.img}/></ImageContainer>
                </Wrapper>
                <Hr/>
                <Wrapper>
                    <Title>
                        My Info
                    </Title><Center>
                    <InfoContainer><ListItem>
                        <List>Categories: {pet.categories}</List>
                        <List>Breed: {pet.breed}</List>
                        <List>Vaccinated{pet.vaccinated}<CheckCircleOutline/></List>
                        <List>Gender: {pet.gender}</List>
                        <List>Age: {pet.age}</List>
                        <List>PET ID: {pet._id}</List>
                        </ListItem></InfoContainer></Center>
                 </Wrapper>
                 <Hr/>
                <Wrapper>
                    <Title>Why am I here</Title>
                    </Wrapper>
                    <List><Center>I'm unable to keep them because I get a little time to be with them</Center></List>
                    <Hr/>
                    <Wrapper>
                        <Title>Contact Info</Title>
                        <Center>
                    <InfoContainer><ListItem>
                        <List>Address: {pet.address}</List>
                        <List>Phone Number:{pet.number}<Link to="/login"> SHOW NUMBER</Link></List>
                        </ListItem></InfoContainer></Center>
                    </Wrapper>

                    <Hr/>

        <Newsletter/>
        <Footer/>
        </Container>
  )
}
     
export default PetsInfo;

