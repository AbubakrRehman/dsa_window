import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//import { useHistory } from 'react-router';
import Home from "./Home";



export default function Login(props) {
    console.log(props.history);
    const [login_credentials, setLogin_credentials] = useState({
        email:"",
        password:""
    });
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);
    
  

    //handles input field 
    let handle_Login_Fill=(e)=>{
        let new_login_credentials={...login_credentials};
        let value=e.target.value;
        let fieldname=e.target.name;
        new_login_credentials[fieldname]=value;
        setLogin_credentials(new_login_credentials);
    }

    const handleLogout = () => {
        setUser(undefined);
        setLogin_credentials({email:"",password:""});
        localStorage.clear();
      };

    //checks whether the user is valid or not . and redirects to the next page .
    //next pahe is /home
    let handle_Login_Submit=(e)=>{
      e.preventDefault();

      const requestOptions={
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(login_credentials)
      }
    
        if(login_credentials.email && login_credentials.password){
            fetch("/user_signin",requestOptions)
            .then((data)=>data.json())
            .then((actual_data)=>{
                console.log(actual_data);
                if(actual_data.length>0){
                    
                    //props.setIsLogin(true);
                    setUser(actual_data);
                    localStorage.setItem("user", JSON.stringify(actual_data));
                    // props.history.push("/home");
                    //history.push('/home');
                    
                }
                else{
                    alert("wrong credentials");
                }
            })
            .catch((err)=>console.log(err));
        }
        else{
            alert("wrong credentials");
        }
    }
    
    if (user) {
        return (
        //   <div>
        //     {user.fname} is loggged in
        //     <button onClick={handleLogout}>logout</button>
        //   </div>
        <Home handleLogout={handleLogout} setLogin_credentials={setLogin_credentials} setUser={setUser}/>
        );
      }
    


    return (
        <>
            <h1>This is Login page</h1>
            <form onSubmit={handle_Login_Submit}>
                <div className="mb-3">
                   <input placeholder="Email"type="email" onChange={handle_Login_Fill} name="email" className="form-control" id="email1" aria-describedby="emailHelp" value={login_credentials.email}/>
                   <br/><br/>
                   <input placeholder="Password" type="password" onChange={handle_Login_Fill}  name="password" className="form-control" id="password1" value={login_credentials.password}/>
                </div>
             
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <h1>Don't have an account?<NavLink to="/signup">Sign Up here! </NavLink></h1>
        </>
    )
}
