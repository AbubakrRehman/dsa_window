import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js'
import Navigation from './components/Navigation.js'
//import { useState ,useEffect} from 'react';
import { Route } from "react-router-dom";
import About from './components/About.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import Routes from './components/Routes.js';
import { useState } from 'react';
import { useHistory } from 'react-router';

function App() {
  /* const [question_list, setQuestion_list] = useState(
    [
      {
        id: 1,
        question: "Reverse the array",
        status: false
      },
      {
        id: 2,
        question: "Find the maximum and minimum element in an array",
        status: false
      },
      {
        id: 3,
        question: "Find the 'Kth' max and min element of an array",
        status: false
      }
    ]); */


 

return (
    <>
        {/* <Navigation/> */}
        {/* <Route exact path="/question_bucket" component={Main}/> */}
        {/* <Route exact path="/home" component={Home}  /> */}
        {/* <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/> */}

        <Routes />
        
      
</>
  );
}

export default App;
