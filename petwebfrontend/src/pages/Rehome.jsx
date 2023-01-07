import styled from "styled-components"
import { mobile } from "../responsive";
import { useNavigate} from "react-router-dom";
import React,{useState} from "react";
//import { Radio } from "@mui/material";
const Header = styled.h1`
    width: 100%;
    margin-bottom: 20px;
    font-size: 21px;
    line-height: inherit;
    border-bottom: 1px solid #e5e5e5;
`
const Topic = styled.div`
  width: 100%;
    margin-bottom: 1px;
    font-size: 16px;
    
`;
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("assets/rehome.jpg") center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background-color: white;
   ${mobile({width:"75%"})}
   align-items: center;
   flex-direction: column;
   display: flex;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 20%;
    margin: 10px 10px 0px 0px;
    padding: 10px;
    display: flex;
    margin-right:100px;
`;
const Rdbutton = styled.input`
    margin: 0px 10px 0px 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`; 
const Rehome =() =>{
    const navigate = useNavigate();
    const [rehome, setRehome]= useState({
        petname:"",
        type:"",
        age:"",
        breed:"",
        gender:"",
        vaccination:"",
        kids:"",
        animals:""
    });
     let name,value;
 
    const handleInputs = (e)=>{
      console.log(e);
      name=e.target.name;
      value= e.target.value;
 
      console.log(" ------> ", name, "===", value);
 
   setRehome({...rehome,[name]:value});
 }
 const PostData = async(e) =>{
     e.preventDefault();
     console.log("------->", rehome )
     const req = await fetch("http://localhost:5000/api/adoption/adoption", {
         method:"POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(rehome)
     });
 
     const data = await req.json();
     if (data.status === 401 || !data){
         console.log("invalid info");
     }else{
         console.log("Rehoming info succesfully");
         window.alert("Rehoming info succesfully")
         navigate("/adoptionpage");
     }
 }
return (
    <Container> 
        <Wrapper>
            <Title>
                Rehome a pet
            </Title>
            <Agreement>To give out your pet for adoption</Agreement>
            <Header>Pet's details</Header>
            <Form>
                <Topic>Pet's name?</Topic>
            <Input placeholder="Please enter pet's name"
            name="name"
            value={rehome.name}
            onChange={handleInputs}
            />
            <Topic>Pet type</Topic>
            <Rdbutton type="radio" name="type" value="Dog" onChange={handleInputs}/> Dog   
            <Rdbutton type="radio" name="type" value="Cat" onChange={handleInputs}/> Cat  
            <Topic>Pet Breed?</Topic>
            <Input placeholder="Please enter pet's breed"
            name="breed"
            value={rehome.breed}
            onChange={handleInputs}
            /> 
            <Topic>Age of your pet?</Topic>
            <Input placeholder="Average age of pet"
            name="age"
            value={rehome.age}
            onChange={handleInputs}
            />
            {/* <Topic>Pet's gender</Topic>
            <Rdbutton type="radio" name="gender" value="Male" onChange={handleInputs}/>Male
            <Rdbutton type="radio" name="gender" value="Female" onChange={handleInputs}/>Female */}
            <Topic>Pet's vaccination</Topic>
            <Rdbutton type="radio" name="vaccination" value="Yes" onChange={handleInputs}/>Yes 
            <Rdbutton type="radio" name="vaccination" value="No" onChange={handleInputs}/>No
            {/* <Topic>Pet is good with kids?</Topic>
            <Rdbutton type="radio" name="kids" value="Yes" onChange={handleInputs}/>Yes 
            <Rdbutton type="radio" name="kids" value="No" onChange={handleInputs}/>No
            <Topic>Pet is good with other animals?</Topic>
            <Rdbutton type="radio" name="animals" value="Yes" onChange={handleInputs}/>Yes 
            <Rdbutton type="radio" name="animals" value="No" onChange={handleInputs}/>No */}
            <Agreement>By creating a profile for the pet ,I consent to the processing of my personal data 
                in accordance with the <b> PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={PostData} >CREATE</Button>
            </Form>
        </Wrapper>
        </Container>
  )
}

export default Rehome;