import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Main from "./Main.js";
import Bookmark from "./Bookmark.js";
import Navigation from './Navigation.js';
import Signup from './Signup.js';
import Login from './Login.js';
import QuestionNote from './QuestionNote.js';
import Error from './Error.js';
import IsLogin from './IsLogin.js';
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Routes(props) {
return (
      <>
      {/*Routers for targeting different mount points of our site.
      This is the main(top label) routing area*/}
      <Switch>
          <Route exact path="/" component={Login}/>
          {/* <Route {...props} exact path="/" render={props=> <IsLogin isLogin={isLogin} setIsLogin={setIsLogin} handle_logout={handle_logout} {...props}/>}/> */}
          <Route path="/bookmark" component={Bookmark}/>
          <Route path="/signup" component={Signup}/>
          {/* <Route {...props} path="/home" render={props=> <Home handle_logout={handle_logout} {...props}/>}/> */}
          <Route exact path="/:topic" component={Main}/>
          <Route exact path="/:topic/:id" component={QuestionNote}/>
          <Route component={Error}/>
          
      </Switch>
      </>
      
    )
}
