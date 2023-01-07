import React from 'react'
import { useState } from 'react';
const Logins = () => {
    const [user, setUser]= useState({
        name:"",
        password:""
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
    const req = await fetch("http://localhost:5000/api/newaccount/", {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    const data = await req.json();
    if (data.status === 401 || !data){
        console.log("invalid info");
    }else{
        console.log(" account created succesfully");
    }
}
  return (
    <div >Login
    <label>Username</label>
    <input  name="name"
            type="text"
            placeholder="Enter Username"
            value={user.name}
            onChange={handleInputs}/>
    <label>Password</label>
    <input  name="password"
            type="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleInputs}/>
            <button onClick={PostData}>Submit</button>
    </div>
    
  )
}

export default Logins