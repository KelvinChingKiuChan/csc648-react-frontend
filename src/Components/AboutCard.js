import React from "react";

import { Link } from "react-router-dom";

const roleCSS={
    fontSize: "calc(15px + 0.25vw)",
    fontFamily: "Impact",
    color: "black",
    textDecoration: "underline",
}

export const cardCSS = {
    display: "inline-block",
    minWidth: "290px",
    Width: "35vw",
    maxHeight: "40vh",
    minHeight: "450px",
    display: "inline-block",
    margin: "2vmin",
    marginTop: "0.3vmin",
    boxShadow: "1px 2px grey"
}

const imageCSS = {

    marginTop: "3vmin",
    marginLeft: "2vmin",
    marginRight: "2vmin",
    padding: "0.25vmin", 
    minHeight: "250px", 
    minWidth: "260px", 
    width: "4vw", 
    height: "30vh",
    maxHeight: "10vh",
    borderRadius: "50%",
    border: "10px double black",
    background: "transparent"
}

//props elements
//userImage
//userLink
//userRole

function AboutCard(props) {
    return (
        <div className="card AboutCard" style={cardCSS}>
            <img className= "card-img-top" src= {props.userImage} style={imageCSS}/>
            <div class="card-body">
                <p style={roleCSS}>
                    @{props.userName}
                    <hr style={{ border: "0.05vmin solid white" }} />
                    <p>
                    ({props.userRole})
                        </p>
                </p>
                <Link exact to={props.userLink} style={{fontSize: "calc(20px + 0.25vw)", color: "#1a1d1d"}}>See Profile</Link>
            </div>
        </div>
    )
}

export default AboutCard