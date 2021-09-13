
import React from "react";
import Navigation from "./Navigation";
import FooterComp from "./Footer";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import '../App.css';

function AppInfo() {
    return (
        <div id="AppInfo">
            <Navigation></Navigation>
            <Container style={{ padding: "2vmin", fontSize: "5vmin", minHeight: "100vh", textAlign: "left" }}>

            <h>✨🦦<Link exact to="/">pottr</Link>🦦✨</h>
            <hr/> 
            <h1>Problem:</h1>
            <p style={{fontSize: "3vmin"}}>

People love memes. People love money. People do not have a website to bring these two things together.
            </p>
            <h1>Solution:</h1>
            <p style={{fontSize: "3vmin"}}>
A web application where users participate in meme competitions. Basic process:
            </p><p style={{fontSize: "3vmin"}}>
    1.Users submit a meme submission and a "points" backing to a competition listing. These "points" are entered into a pot.
            </p><p style={{fontSize: "3vmin"}}>
    2.After the end of the submission period, the voting period opens (no self-voting) and the participating users may vote for a submission.
            </p><p style={{fontSize: "3vmin"}}>
    3.The elected winner receives the pot as a reward.
            </p><p style={{fontSize: "3vmin"}}>

    *I think it is important to note that dealing with untrustworthy participants trying to "cheat" the system are inevitable. For example, creating multiple accounts to vote for a particular meme.
            </p><p style={{fontSize: "3vmin"}}>
            <h1>Ideas:</h1>
            </p><p style={{fontSize: "3vmin"}}>
            <h2>Name</h2>
            </p><p style={{fontSize: "3vmin"}}>
            pottr.app
                pot + otter = cool mascot
            </p><p style={{fontSize: "3vmin"}}>
            <h1>Issues:</h1>

    I: Instagram already does this. A: Instagram is not a dedicated platform for this kind of function. In terms of dealing with this type of activity, Instagram may take on unneccesary risk (i.e. underage participants) and thus, future use of the Instagram platform is not static and guaranteed. Many others, myself included, do not use Instagram and are thus barriered from this type of activity if hosted on Instagram. However, Instagram is an extremely large entity and is worth considering how it may impact market fit. With this web app, novel ideas must be developed for user adoption.
            </p>
            <h1>Features:</h1>
            </Container>
            <FooterComp />
        </div >
    )
}

export default AppInfo