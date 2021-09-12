import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Col } from "react-bootstrap";

const introCSS = {
    justifyContent: "center",
    minHeight: "92.5vh",
    background: "transparent",
    paddingBottom: "20vmin"
}

const headingCSS = {
    paddingTop: "2vmin",
    font: "calc(15px + 4vmin) bold",
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    color: "darkslategrey"
}

//calc(100px + 16vw)    calc(100px + 16vw)

//background: "#E7717D"
//linear-gradient(to bottom, #8ee4af 0%, #ff99cc 100%)
//linear-gradient(to bottom, #907163 0%, #379683 100%)

//elements in props


//change back to non-fluid

function AboutInfo(props) {
    return (
        <Jumbotron style={introCSS}>
                <div style={headingCSS}>✨ The Masterminds (Team - 1) ✨</div>
            <Container fluid style={{width: "80vw"}}>
                    {props.members}
            </Container>
        </Jumbotron>
    )
}

export default AboutInfo