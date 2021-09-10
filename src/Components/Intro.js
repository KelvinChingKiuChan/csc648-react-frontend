import React from "react";
import { Jumbotron } from "react-bootstrap";

import Logo from "./LogoT1.png"
import Alex from "./AlexProfile.jpg"
import Damon from "./Damon.jpg"
import Steve from "./SteveProfile.png"
import SteveA from "./Steve.png"

const introCSS = {
    justifyContent: "center",
    minHeight: "92.5vh"
}

const headingCSS = {
    paddingTop: "5vmin",
    fontSize: "calc(12px + 4vmin)",
    color: "#E6E6FA",
    textShadow: "1px 3px grey"
}

//linear-gradient(to bottom, #8ee4af 0%, #ff99cc 100%)
//linear-gradient(to bottom, #907163 0%, #379683 100%)

function Intro() {
    return (
        <Jumbotron style={introCSS}>
            <p>
                <h1 style={headingCSS} id="t"><b>✨ Kelvin Ching Kiu Chan ✨</b></h1>
            </p>
            <hr style={{ border: "0.25vmin double white" }} />
            <img src={Logo} className="Profile" />
            <p>
               
                <a className= "Roles" id= "GithubMaster"/>
                <a className= "Roles" id= "Team1"/>
            </p>
            <p>
                <a className="ClickCSS" href="#test1">Click here for more</a>
            </p>
        </Jumbotron>
        // <div class="jumbotron">
        //     <h1 class="display-4">Hello, world!</h1>
        //     <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        //     <hr class="my-4"/>
        //     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        //     <p class ="lead">
        //     <a class ="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        //     </p>
        // </div>
    )
}

export default Intro