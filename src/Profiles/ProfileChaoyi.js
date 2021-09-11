import React from 'react';
import '../App.css';

import Navigation from '../Components/Navigation';
import ProfileIntro from '../Components/ProfileIntro';
import ProfileInfo from '../Components/ProfileInfo'
import FooterComp from '../Components/Footer';

//here to change image
import ProfilePic from '../Components/Photos/Chaoyi.jpg'

const role= "Database"
var roles = [<a className="Badges" id={role} />,<a className="Badges" id="Team-1" />]

//Mandatory Section:
//General Info (Mandatory) replace the default values with your desired content related
//enter your name
const name = "Chaoyi Ying"
//change on top with import and link your image 
//any amount of text to describe yourself
const text = `CS major SFSU student`


//Media links Section(Optional):

//if you don't want to share any of these medias to people is fine
//I put in some default values.  If you want to share then replace them

//these 3 has to be links (No exceptions)
const facebook = "https://www.facebook.com/"
const twitter = "https://twitter.com/?lang=en"
const github = "https://github.com/ChaoyiYing"

//these 2 will be the email and discord tag
const email = "cying1@mail.sfsu.edu"
const discord = "Pikachu#8346"


function ProfileChaoyi() {
  return (

    <div className="Chaoyi-Profile">
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

export default ProfileChaoyi
