import React from 'react'
import {Link} from "react-router-dom"; 
import logo from "../Assets/Logo2.jpeg"
const Header = () => {
  return (
    <nav>   
        <div>
            <img src={logo} alt="dataInsightsX-Logo" /> 
            <h1>dataInsightsX</h1>
        </div>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"#about"}>About</Link>
        </main>
        
    </nav>
  )
}

export default Header