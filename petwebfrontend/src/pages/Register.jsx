import styled from "styled-components"
import { mobile } from "../responsive";
import {Link, useNavigate} from "react-router-dom";
import React,{useState} from "react";
import {useFormik} from"formik";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("assets/backgroundR.jpg") center;
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
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
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
const ErrorMessage= styled.span`
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
`;
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser]= useState({
        name:"",lastname:"",
        username:"",email:"",
        password:"",cpassword:""
    });
    let name,value;

   const handleInputs = (e)=>{
     console.log(e);
     name=e.target.name;
     value= e.target.value;

     console.log(" ------> ", name, "===", value);

  setUser({...user,[name]:value});
}
const PostData = async(e) =>{
    e.preventDefault();
    //https://bobbyhadz.com/blog/react-import-variable-from-another-file#:~:text=To%20import%20a%20variable%20from,.%2Fanother%2Dfile'%20.
    const req = await fetch("http://localhost:5000/api/auth/register", {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    const data = await req.json();
    if (data.status === 401 || !data){
        console.log("invalid info");
    }else{
        console.log(" account created succesfully");
        navigate("/login");
    }
}

// useFormik({
//     initialValues:initialValues,
//     onSubmit:(value)=>{
//         console.log(values)
//     }
// )}

  return (
    <Container> 
        <Wrapper>
            <Title>
                Create an Account
            </Title>
            <Form>
            <Input placeholder="name" name="name"
            value={user.name}
            onChange={handleInputs}
            err
            />
            <Input placeholder="last name" name="lastname"
            value={user.lastname}
            onChange={handleInputs}/>
            <Input placeholder="username" name="username"
            value={user.username}
            onChange={handleInputs}
            /> 
            <Input placeholder="email" type="email" name="email"
            value={user.email}
            onChange={handleInputs}/>
            <Input placeholder="password" type="password" name="password"
            value={user.password}
            onChange={handleInputs}/>
            <Input placeholder="confirm password" type={"password"} name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}/>
            <Agreement>By creating an account ,I consent to the processing of my personal data 
                in accordance with the <b> PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={PostData}  >CREATE</Button>
            </Form>
        </Wrapper>
        </Container>
  )
}

export default Register;