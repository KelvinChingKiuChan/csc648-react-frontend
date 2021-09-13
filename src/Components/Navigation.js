import React from "react";

import TLogo from './Photos/T1Logo.png' //Transparent Logo
import "../App.css"

import { Link } from 'react-router-dom';

const NavigationCSS = {
    justifyContent: "center",
    background: "#DCDCDC"
}

function Navigation() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style={NavigationCSS}>
            <img src={TLogo} height="1vh" className="Logo" alt="Team One" />
            <div className="NavLinks" style={{ marginRight: "30vmin" }}>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="NavLinks" exact to="/">About Us</Link>
                    <Link className="NavLinks" exact to="/AppInfo">App</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation