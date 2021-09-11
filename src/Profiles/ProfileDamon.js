import React from 'react';
import '../App.css';

import Navigation from '../Components/Navigation';
import ProfileIntro from '../Components/ProfileIntro';
import ProfileInfo from '../Components/ProfileInfo'
import FooterComp from '../Components/Footer';

//here to change image
import ProfilePic from '../Components/Photos/Damon.jpg'

const role= "Team-Lead"
var roles = [<a className="Badges" id={role} />,<a className="Badges" id="Team-1" />]

//Mandatory Section:
//General Info (Mandatory) replace the default values with your desired content related
//enter your name
const name = "Damon is here"
//change on top with import and link your image 
//any amount of text to describe yourself
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             `


//Media links Section(Optional):

//if you don't want to share any of these medias to people is fine
//I put in some default values.  If you want to share then replace them

//these 3 has to be links (No exceptions)
const facebook = "https://www.facebook.com/"
const twitter = "https://twitter.com/?lang=en"
const github = "https://github.com/"

//these 2 will be the email and discord tag
const email = "damonchen13@gmail.com "
const discord = "NA"


function ProfileDamon() {
  return (

    <div className="Damon-Profile">
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

export default ProfileDamon@
