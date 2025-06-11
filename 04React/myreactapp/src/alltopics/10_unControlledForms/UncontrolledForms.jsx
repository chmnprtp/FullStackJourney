import React from 'react'
import { useRef } from 'react'

const UncontrolledForms = () => {
    // console.log(useRef("dummy"));
    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const formHandle = (e)=>{
        e.preventDefault();
        // console.log(usernameRef.current.value);
        // console.log(passwordRef.current.value);

        let newUser = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(newUser);
    
        //! Clearing input fields
        usernameRef.current.value="";
        passwordRef.current.value="";
    };

    
  return (
    <div>
        <h1>UnControlledForm</h1>
        <form onSubmit={formHandle}>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' ref={usernameRef} className='border'/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' id='password' ref={passwordRef} className='border'/>
            <br />
            <button type='submit' className='border'>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForms