import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Logo from "./Photos/FixedLogo2.png"

const introCSS = {
    justifyContent: "center",
    minHeight: "92.5vh",
    paddingBottom: "20vmin"
}


const headingTextCSS = {
    font: "calc(45px + 4vmin) bold",
    fontFamily: "Garamond, serif",
    color: "#FFFACD",
    display: "inline-block",
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
            <a href= "#AboutInfo">
                <blockquote className="blockquote" style={{ paddingTop: "15vmin", paddingBottom: "10vmin" }}>
                    <p className="mb-0" style={headingTextCSS}>
                        No.1 Masterminds
                    </p>
                    <cite className="blockquote-footer" style={{ fontSize: "calc(0px + 0vmin) bold" }} id= "AboutInfo">
                        @Real Team Ones
                    </cite>
                </blockquote>
                <Container fluid style={{ width: "80vw", marginTop: "2vmin" }}>
                    {props.members}
                </Container>
            </a>
        </Jumbotron>

    )
}

export default AboutInfo