import React, { useState } from 'react'
import "../../global.css"
import { IoClose, IoMenu } from "react-icons/io5";
import {Link} from "react-router-dom"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
   <header class="header" data-header>
    <div class="container">

      <h1 >
        <a href="http://localhost:5173/" class="logo">Aspirion</a>
      </h1>

      <nav className={`navbar ${isOpen ? "active" : ""}`} data-navbar>
        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#services" class="navbar-link" data-nav-link>Services</a>
          </li>

          <li class="navbar-item">
            <a href="#features" class="navbar-link" data-nav-link>Features</a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link" data-nav-link>About</a>
          </li>

       

    

        </ul>
      </nav>
<Link to="/form">
      <button class="btn btn-secondary getStrated">Start Your Journey</button>
</Link>
      <button style={{width:'auto'}} className="btn-secondary nav-toggle-btn " onClick={toggleMenu}>
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>


    </div>
  </header>
   </> 
  )
}

export default Nav
