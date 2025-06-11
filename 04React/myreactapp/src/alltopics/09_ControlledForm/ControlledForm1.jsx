const ControlledForm1 = () => {
    return(
        <div>
            <h1>ControlledForm 1</h1>
        </div>
    )
}
export default ControlledForm1;


{/*
import React, { useState } from 'react'

const Controlled1 = () => {
   const [username,setUsername] =  useState("");
   const [email,setEmail] =  useState("");
   const [password,setPassword] =  useState("");

   let handleUsername = (e) =>{
    // console.log(e)//synthetic object
    // console.log(e.target) //Output: whole input tag of username
    // console.log(e.target.value)//Output:whatever value to type
    // console.log("Username input")
    setUsername(e.target.value); // to show the value to the input field
   } 
   let handleEmail = (e) =>{
    setEmail(e.target.value);
   }
   let handlePassword = (e) =>{
    setPassword(e.target.value)
   }
   let formHandle = (e) =>{
    e.preventDefault(); // To stop the page refresh
    console.log({username,email,password})
    setUsername("");
    setPassword("");
    setEmail("");
   }

  return (
    <div>
        <h1>Controlled Form</h1>
        <form onSubmit={formHandle}>
            <label htmlFor="username">Username :</label>
            <input type="text" id="username" value={username} onChange={handleUsername}/>
            <br />
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" value={email} onChange={handleEmail}/>
            <br />
            <label htmlFor="password">Password :</label>
            <input type="password" id="password"value={password} onChange={handlePassword}/>
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Controlled1
*/}