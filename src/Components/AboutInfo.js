import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const introCSS = {
    justifyContent: "center",
    minHeight: "92.5vh",
}

const headingCSS = {
    paddingTop: "1vmin",
    fontSize: "calc(3px + 4vmin)",
    fontFamily: "cursive",
    color: "black"
}

//calc(100px + 16vw)    calc(100px + 16vw)

//background: "#E7717D"
//linear-gradient(to bottom, #8ee4af 0%, #ff99cc 100%)
//linear-gradient(to bottom, #907163 0%, #379683 100%)

//elements in props

function AboutInfo(props) {
    return (
        <Jumbotron style={introCSS}>
            <p>
                <div style={headingCSS}>✨ The Masterminds (Team - 1) ✨</div>
            </p>
            <hr style={{ border: "0.25vmin double white" }} />
            <Container>
                {props.members}
            </Container>
        </Jumbotron>
    )
}

export default AboutInfo