import React from 'react';
import '../App.css';

import Navigation from '../Components/Navigation';
import ProfileIntro from '../Components/ProfileIntro';
import ProfileInfo from '../Components/ProfileInfo'
import FooterComp from '../Components/Footer';

//here to change image
import ProfilePic from '../Components/Photos/Hugh.jpg'

const role= "Scrum-Master"
var roles = [<a className="Badges" id={role} />,<a className="Badges" id="Team-1" />]

//Mandatory Section:
//General Info (Mandatory) replace the default values with your desired content related
//enter your name
const name = "Hugh Nguyen"
//change on top with import and link your image 
//any amount of text to describe yourself
const text = `"Im a senior at SFSU studying Computer Science."
             `


//Media links Section(Optional):

//if you don't want to share any of these medias to people is fine
//I put in some default values.  If you want to share then replace them

//these 3 has to be links (No exceptions)
const facebook = "https://www.facebook.com/"
const twitter = "https://twitter.com/?lang=en"
const github = "https://github.com/"

//these 2 will be the email and discord tag
const email = "hnguyen37@mail.sfsu.edu"
const discord = "hi78687"


function ProfileHugh() {
  return (

    <div className="Hugh-Profile">
      <Navigation></Navigation>
      <ProfileIntro
        userName={name}
        userImage={ProfilePic}
        userRoles= {roles}
      />
      <ProfileInfo
        userText={text}
        userFacebook={facebook}
        userTwitter={twitter}
        userGithub={github}
        userEmail={email}
        userDiscord={discord}
      />
      <FooterComp></FooterComp>
    </div>
  );
}

// var roles = [<a className="Badges" id="GithubMaster" />,
// <a className="Badges" id="Team1" />]

// document.getElementById('roles').inputMode= roles

/* <NBar></NBar>
<ProfileIntro></ProfileIntro>
<ProfileInfo id="test"></ProfileInfo>
<FooterComp></FooterComp> */

export default ProfileHugh
