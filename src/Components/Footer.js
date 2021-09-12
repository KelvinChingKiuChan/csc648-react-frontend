import React from "react";
import { Container } from "react-bootstrap";

const footerStyling={
    height: "10vh",
    background: "#1a1d1d",
    padding: "2vmin",
    color: "black",
    fontSize: "1vmin"
}

function FooterComp(){
    return(
        <Container fluid style={footerStyling}>
            <p>
                @T1 site 2021
            </p>
        </Container>
    )
}

export default FooterComp