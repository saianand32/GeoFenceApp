import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const container = useRef(null);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         
         
          <a  className="nav-logo" style={{maxWidth:"450px"}} onClick = {()=>{
            scroll.scrollToTop()
          }}>
            <h3>GeoFence</h3>           
          </a>
        


          <div><i class='fas fa-moon fa-lg' id="moon_icon"></i></div> 
         <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item"></li>
            <li className="nav-item" id = "homelist">
              <a className="nav-links" onClick = {()=>{
            scroll.scrollToTop()
          }}>
                Home
              </a>
            </li>

            <li className="nav-item" id = "homelist">
            <Link 
        activeClass="active" 
        to="about"  
        smooth={true} 
        offset={50} 
        duration={500} 
        className="nav-links">
            How To Use
        </Link>
            </li>

            <li className="nav-item">
             

        <Link 
        activeClass="active" 
        to="create"  
        smooth={true} 
        offset={50} 
        duration={500} 
        className="nav-links">
            Create
        </Link>
            </li>
            <li className="nav-item">
            <Link 
        activeClass="active" 
        to="contact"  
        smooth={true} 
        offset={50} 
        duration={500} 
        className="nav-links">
            Contact
        </Link>
            </li>
          </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
