import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation(props) {
  console.log('check',props);
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">Question_Bucket</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/bookmark">Bookmark</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">SignUp</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>

        <button onClick={props.handleLogout}>Logout</button>
        
        
     
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
