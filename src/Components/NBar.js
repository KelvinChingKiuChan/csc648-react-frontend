import React from "react";
import Logo from "./LogoT1.png"
import Logo1 from "./LogoT12.png"
import Logo2 from "./LogoT13.png"
import "../App.css"

const NBarCSS = {
    justifyContent: "center",
    background: "#C2CAD0"
}

function NBar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style={NBarCSS}>
            <img src={Logo2} height="1vh" className="Logo" alt="Team One" />
            <div className= "NavLinks" style={{marginRight: "30vmin"}}>
                Team-1
                </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="NavLinks" href="">
                        About
                    </a>
                </li>
            </ul>
        </nav>
        
    )
}

export default NBar