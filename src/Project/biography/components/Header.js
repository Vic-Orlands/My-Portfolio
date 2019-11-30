import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import "../styles/Header.css";
import logo from "../assets/logo.png";

class Header extends Component {
  state = {
    toggle: false
  };
  toggle = () => {
    this.setState( {
        toggle: !this.state.toggle
    });
  };


  render() {
    return (
      <div className="headerBody">
        <div className="headerName">
          <img src={logo} alt="My Logo" className="myLogo" />
          <ul className="myName">
            <li> INNOCENT CHIMEZIE </li>
          </ul>
        </div>

        <div className="headerName">
          <FaBars onClick = {this.toggle} className="headerMenu" />
          <div>

            <ul className="myList-Desktop">
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

            {this.state.toggle && (
              <ul className="myList-Phone">
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
            )} 

          </div>
        </div>
      </div>
    );
  }
}
export default Header;
