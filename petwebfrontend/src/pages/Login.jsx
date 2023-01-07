import styled from "styled-components";
import{mobile} from "../responsive";
//import {Link} from "react-router-dom";
import { useState } from "react";
//import { login } from "../redux/apiCalls";
import { useNavigate, Link } from "react-router-dom";
//import {useDispatch, useSelector} from "react-redux";
//import axios from 'axios';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("assets/backgroundL.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
   width: 25%;
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;
const Links =styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Login = () => {
    const navigate = useNavigate();
const[username, setUsername]= useState('');
const[password, setPassword]= useState('');
//const dispatch = useDispatch();
const loginUser = async(e)=>{
    e.preventDefault();
    const req = await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password
        })
    });
    const data =  req.json();
     if (req.status ===401 || !data){
        console.log("invalid credentials!!");
        window.alert("invalid credentials!!");
     }else{
        console.log("login successfull");
        window.alert("login successfull");
        navigate("/");
     }
}
// const { isFetching, error} = useSelector((state) => state.user);
// const handleClick=(e)=>{
//    e.preventDefault()
//     login(dispatch,{username, password});
// }
    return (
        <Container> 
            <Wrapper>
                <Title>
                   SIGN-IN
                </Title>
                <Form>
                <Input placeholder="username" type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <Input placeholder="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <Button 
                onClick={loginUser} 
               // disabled={isFetching}
                >LOGIN</Button>
                <Links>DO YOU NOT REMEMBER YOUR PASSWORD?</Links>
                <Link to="/register" ><Links >CREATE A NEW ACCOUNT</Links></Link>
                </Form>
            </Wrapper>
            </Container>
      )
  
}

export default Login