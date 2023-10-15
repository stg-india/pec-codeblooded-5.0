import React from 'react'
// import {Link} from "react-router-dom"; 
import logo from "../Assets/Logo2.jpeg"
import {HashLink} from "react-router-hash-link"; 
const Header = () => {
  return (
    <nav>   
        <div>
            <img src={logo} alt="dataInsightsX-Logo" /> 
            <h1>dataInsightsX</h1>
        </div>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"#about"}>About</HashLink>
            <HashLink to={"#contact"}>Contact Us</HashLink>
        </main>
        
    </nav>
  )
}

export default Header