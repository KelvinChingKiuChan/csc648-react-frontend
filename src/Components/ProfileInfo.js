import React from "react";

import '../App.css'

import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";

import jQuery from "jquery"; //later for dropdown menu
import $ from "jquery";


//CSS for each indivudal elements
const infoCSS = {
    background: "#AFD280",
    minHeight: "100vh",
    fontSize: "calc(15px + 2vmin)"
}

const headerCSS = {
    fontFamily: "cursive",
    paddingTop: "10vh",
    color: "black"
}

const textCSS = {
    justifyContent: "center",
    color: "#1f2833",
    overflow: "hidden",
    border: "5px #A9A9A9 inset",
    padding: "20px"
}

//Georgia, 'Times New Roman', Times, serif

//props elements
//userText
//userFacebook
//userTwitter
//userGithub
//userEmail
//userDiscord

function ProfileInfo(props) {
    return (
        <Jumbotron style={infoCSS} id="Info">
            <Container>
                <h1 class="display-3" style={headerCSS}>"A little about myself"</h1>
                <hr class="my-4" />
                <p style={textCSS}>
                    {props.userText}
                </p>
                <h1 class="display-3" style={headerCSS}>"Media Links"</h1>
                <p>
                    <a className="Badges" href= {props.userFacebook} id="Facebook" />
                    <a className="Badges" href= {props.userTwitter} id="Twitter" />
                    <a className="Badges" href= {props.userGithub} id="Github" />
                </p>
                <ul>
                    <li>
                        Email: {props.userEmail}
                    </li>
                    <li>
                        Discord: {props.userDiscord}
                    </li>
                </ul>
            </Container>
        </Jumbotron>
    )
}


export default ProfileInfo