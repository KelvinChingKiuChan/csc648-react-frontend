import React from "react";

import './App.css';

import Navigation from './Components/Navigation';
import AboutInfo from "./Components/AboutInfo";
import FooterComp from './Components/Footer';
import AboutCard from "./Components/AboutCard";

import Steve from './Components/Photos/Steve.png'
import Alex from './Components/Photos/AlexProfile.jpg'
import Damon from './Components/Photos/Damon.jpg'
import Chaoyi from './Components/Photos/Chaoyi.jpg'
import Hugh from './Components/Photos/Hugh.jpg'
import Kelvin from './Components/Photos/Kelvin.png'
import DefaultImg from './Components/Photos/LogoT1.png'

//later replace by database. Members

const alex= <AboutCard
                userImage= {Alex}
                userLink= {"/Alex"}
                userRole= {[<a className="Badges" id={"Github-Master"} />,<a className="Badges" id="Team-1" />]}
                userName= {"Alex"}
            />

const hugh= <AboutCard
            userImage= {Hugh}
            userLink= {"/Hugh"}
            userRole= {[<a className="Badges" id={"Scrum-Master"} />,<a className="Badges" id="Team-1" />]}
            userName= {"Hugh"}
            />

const kelvin = <AboutCard
            userImage= {Kelvin}
            userLink= {"/Kelvin"}
            userRole= {[<a className="Badges" id={"Frontend"} />,<a className="Badges" id="Team-1" />]}
            userName= {"Kelvin"}
            />

const steven= <AboutCard
            userImage= {Steve}
            userLink= {"/Steven"}
            userRole= {[<a className="Badges" id={"Backend"} />,<a className="Badges" id="Team-1" />]}
            userName= {"Steven"}
        />

const chaoyi= <AboutCard
            userImage= {Chaoyi}
            userLink= {"/Chaoyi"}
            userRole= {[<a className="Badges" id={"Database"} />,<a className="Badges" id="Team-1" />]}
            userName= {"Chaoyi"}
        />

const damon= <AboutCard
            userImage= {Damon}
            userLink= {"/Damon"}
            userRole= {[<a className="Badges" id={"Team-Lead"} />,<a className="Badges" id="Team-1" />]}
            userName= {"Damon"}
        />

var team1= [kelvin, steven, damon, chaoyi, hugh, alex]

function About() {
    return (
        <div id="About" style= {{background: "repeating-linear-gradient(Indigo 0%, #663399 60vh, white 100%, white 100%)"}}>
            <Navigation></Navigation>
            <AboutInfo
                members={team1}
            />
            <FooterComp/>
        </div>
    )
}
//repeating-linear-gradient(#7E685A, #C2B9B0 50vh, #e7717d 0%, #c2cad0 100%)
export default About