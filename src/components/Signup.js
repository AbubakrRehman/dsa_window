import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Signup() {
    const [Signup_credentials, setSignup_credentials] = useState({
        email:"",
        password:"",
        fname:"",
        lname:"",
        username:""

    });
  
    let handle_Signup_Fill=(e)=>{
        let new_Signup_credentials={...Signup_credentials};
        let value=e.target.value;
        let fieldname=e.target.name;
        new_Signup_credentials[fieldname]=value;
        setSignup_credentials(new_Signup_credentials);
    }

    let handle_Signup_Submit=(e)=>{
      e.preventDefault();
      const requestOptions={
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(Signup_credentials)
    }


        if(Signup_credentials.email && Signup_credentials.password){
            console.log("abu");
         
            fetch("/user_registration",requestOptions)
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err));
        }
        else{
            alert("wrong credentials");
        }
    }
    


    return (
        <>
            <h1>This is Signup page</h1>
            <form onSubmit={handle_Signup_Submit} >

            <div className="mb-3">
                    
                    <input placeholder="First Name" type="text" onChange={handle_Signup_Fill} name="fname" className="form-control" id="fname1" aria-describedby="emailHelp" value={Signup_credentials.fname}/>
                    <br/><br/>
                    
                    <input placeholder="Last Name" type="text" onChange={handle_Signup_Fill} name="lname" className="form-control" id="lname1" aria-describedby="emailHelp" value={Signup_credentials.lname}/>
                    <br/><br/>

                    <input placeholder="User Name" type="text" onChange={handle_Signup_Fill} name="username" className="form-control" id="username1" aria-describedby="emailHelp" value={Signup_credentials.username}/>
                    <br/><br/>
               
                    <input placeholder="Email" type="email" onChange={handle_Signup_Fill} name="email" className="form-control" id="email1" aria-describedby="emailHelp" value={Signup_credentials.email}/>
                    <br/><br/>
                
                    
                    <input placeholder="Password" type="password" onChange={handle_Signup_Fill}  name="password" className="form-control" id="password1" value={Signup_credentials.password}/>
                    <br/><br/>
                </div>

                
             
                <button type="submit" className="btn btn-primary">Register Now</button>
            </form>

            <h1>Already have an account?<NavLink to="/">Sign In</NavLink></h1>
        </>
    )
}
