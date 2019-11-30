import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import {FaLinkedin}  from 'react-icons/fa'
import {FaGithub}  from 'react-icons/fa'
import {FaTwitter}  from 'react-icons/fa'
import {FaMedium}  from 'react-icons/fa'
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <main className="footerBody">
        <ul className="footerList">
          <NavLink className="nav" to="/">
            <li> HOME </li>
          </NavLink>
          <NavLink className="nav" to="/about">
            <li> ABOUT </li>
          </NavLink>
          <NavLink className="nav" to="/contact">
            <li> CONTACT </li>
          </NavLink>
          <NavLink className="nav" to="/projects">
            <li> PROJECTS </li>
          </NavLink>
        </ul>

        <hr className="footerRule" />

        <div className="footerFonts">
          <a href = "https://www.linkedin.com/in/victor-innocent/" > <FaLinkedin className = "font" /> </a>
          <a href = "https://github.com/Vic-Orlands" > <FaGithub className = "font" /> </a>
          <a href = "https://twitter.com/Vic_Orlands" > <FaTwitter className = "font" /> </a>
          <a href = "https://medium.com/@chimezieinnocent39" > <FaMedium className = "font" /> </a>
        </div>

        <p className="footerPar">
          {" "}
          All materials &copy; Innocent Chimezie 2019{" "}
        </p>
      </main>
    );
  }
}
export default Footer;
