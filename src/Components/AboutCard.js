import React from "react";

import { Link } from "react-router-dom";

const roleCSS = {
    fontSize: "calc(35px + 0.25vw)",
    marginTop: "0.5vmin",
    fontFamily: "Impact",
    color: "darkslategrey",
    textDecoration: "underline",
}

const cardCSS = {
    display: "inline-block",
    minWidth: "600px",
    Width: "35vw",
    maxHeight: "70vh",
    minHeight: "700px",
    margin: "0.25vmin",
    marginBottom: "9vmin",
    boxShadow: "1px 2px grey",
    opacity: "0.9"
}

const imageCSS = {

    marginTop: "7vmin",
    marginLeft: "7vmin",
    marginRight: "7vmin",
    padding: "0.25vmin",
    minHeight: "360px",
    minWidth: "355px",
    width: "14vw",
    height: "15vh",
    maxHeight: "50vh",
    borderRadius: "50%",
    border: "10px double black",
    background: "transparent",
    marginBottom: "3vmin"
}

// const cardCSS = {
//     display: "inline-block",
//     minWidth: "290px",
//     Width: "35vw",
//     maxHeight: "40vh",
//     minHeight: "450px",
//     display: "inline-block",
//     margin: "2vmin",
//     marginTop: "0.3vmin",
//     boxShadow: "1px 2px grey"
// }

// const imageCSS = {

//     marginTop: "3vmin",
//     marginLeft: "2vmin",
//     marginRight: "2vmin",
//     padding: "0.25vmin", 
//     minHeight: "250px", 
//     minWidth: "260px", 
//     width: "4vw", 
//     height: "30vh",
//     maxHeight: "10vh",
//     borderRadius: "50%",
//     border: "10px double black",
//     background: "transparent"
// }

//props elements
//userImage
//userLink
//userRole

function AboutCard(props) {
    return (
        <Link exact to={props.userLink}>
            <div className="card AboutCard" style={cardCSS}>
                <p className="AboutProfileText">
                    Click to see
                </p>
                <img className="card-img-top" src={props.userImage} style={imageCSS}>
                </img>
                <div class="card-body">
                    <p style={roleCSS}>
                        <p style={{fontSize: "calc(35px + 0.25vw)"}}>
                            View Profile
                        </p>
                        @{props.userName}
                        <hr style={{ border: "0.05vmin solid white" }} />
                        <p>
                            {props.userRole}
                        </p>
                    </p>

                </div>
            </div>
        </Link>
    )
}

//<Link exact to={props.userLink} style={{fontSize: "calc(35px + 0.25vw)", color: "#1a1d1d"}}>See Profile</Link>
//20px 
export default AboutCard