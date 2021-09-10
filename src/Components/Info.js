import React from "react";

import '../App.css'

import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import jQuery from "jquery";
import $ from "jquery";


const infoCSS = {
    background: "grey",
    minHeight: "100vh",
    fontSize: "calc(15px + 2vmin)"
}

const headerCSS = {
    fontFamily: "cursive",
    paddingTop: "10vh",
}

const textCSS = {
    justifyContent: "center",
    opacity: "0.5",
    overflow: "hidden",
    border: "2px #A9A9A9 inset",
    padding: "20px"
}

//Georgia, 'Times New Roman', Times, serif

function Info() {
    return (
        <Jumbotron style={infoCSS} id="test1">
            <Container>
                <h1 class="display-3" style={headerCSS}>"A little about myself"</h1>
                <hr class="my-4" />
                <p style={textCSS}>
                    Hello everyone, I am Kelvin and today I am going to
                    talk about how good of a person I am. I know its hard to believe
                    but do believe me, cause I am and my grammar is so damn shit

                    is there really anything i need to say? aaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
                <h1 class="display-3" style={headerCSS}>"Media Links"</h1>
                <p>
                    <a className="Roles" href= "" id="Facebook" />
                    <a className="Roles" href= "" id="Twitter" />
                    <a className="Roles" href= "" id="Github" />
                </p>
            </Container>
        </Jumbotron>
    )
}


export default Info