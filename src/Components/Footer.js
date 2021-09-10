import React from "react";
import { Container } from "react-bootstrap";

const footerStyling={
    height: "10vh",
    background: "#708090",
    padding: "2vmin",
    color: "black",
    fontSize: "2vmin"
}

function FooterComp(){
    return(
        <Container fluid style={footerStyling}>
            <p>
                Team One Website
            </p>
        </Container>
    )
}

export default FooterComp