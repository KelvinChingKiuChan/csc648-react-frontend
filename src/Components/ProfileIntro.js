import React from "react";
import { Jumbotron } from "react-bootstrap";

import Arrow from "./Photos/Arrow5.png"

const introCSS = {
    justifyContent: "center",
    minHeight: "92.5vh"
}

const headingCSS = {
    paddingTop: "5vmin",
    fontSize: "calc(15px + 4vmin)",
    color: "whitesmoke"
}

const clickMsgCSS={
    fontSize: "calc(1px + 3.5vmin)",
    marginBottom: "0vmin",
    color: "white",
    opacity: "0.7"

}

//calc(100px + 16vw)    calc(100px + 16vw)


//linear-gradient(to bottom, #8ee4af 0%, #ff99cc 100%)
//linear-gradient(to bottom, #907163 0%, #379683 100%)

//elements in props
//userName
//userImage

function ProfileIntro(props) {
    return (
        <Jumbotron style={introCSS}>
            <p>
                <div style={headingCSS}>✨ {props.userName} ✨</div>
            </p>
            <hr style={{ border: "0.25vmin double white" }} />
            <img src={props.userImage} className="Profile img-circle" />
            <p id="roles">
                {props.userRoles}
            </p>
            <p>
                <a href="#Info">
                    <img className="ClickCSS" src= {Arrow}/>
                    <div style={clickMsgCSS}>Click for Info </div>
                </a>
            </p>
        </Jumbotron>
    )
}

export default ProfileIntro