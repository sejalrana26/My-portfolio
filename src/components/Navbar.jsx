import React, { useState } from "react";
import "./navbar.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2 style={{paddingTop:"10px"}}>
            <span>S</span>ejal
            <span>R</span>ana
          </h2>
          <h3 style={ { position:"relative", bottom:"4px",padding:"0px 50px 75px 0px" , fontFamily:"cursive" , fontSize:"14px"} }>|Learner|problem solver|Engineer|</h3>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/sejal-rana-30b3741a5/"
                target="_">
                <FaLinkedin className="linkdIn" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sejalrana26"
                target="_">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rana_sejal_26/"
                target="_">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
       <section className="hero-section">
        <p>Hello</p>
        <h1>I'm Sejal Rana</h1>
      </section> 
    </>
  );
};

export default Navbar;