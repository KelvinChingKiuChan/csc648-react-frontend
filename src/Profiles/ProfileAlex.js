import '../App.css';

import Navigation from '../Components/Navigation';
import ProfileIntro from '../Components/ProfileIntro';
import ProfileInfo from '../Components/ProfileInfo'
import FooterComp from '../Components/Footer';

//change image here
import ProfilePic from '../Components/Photos/AlexProfile.jpg'

const role= "Github-Master"
var roles = [<a className="Badges" id={role} />,<a className="Badges" id="Team-1" />]

//Mandatory Section:
//General Info (Mandatory) replace the default values with your desired content related
//enter your name
const name = "Alex Chau" 
//change on top with import and link your image 
const image = ProfilePic
//any amount of text to describe yourself
const text = "The professional github master that we need. :DDDD" 


//Media links Section: (Optional)

//if you don't want to share any of these medias to people is fine
//I put in some default values.  If you want to share then replace them

//these 3 has to be links (No exceptions)
const facebook= "https://www.facebook.com/"
const twitter= "https://twitter.com/?lang=en"
const github= "https://github.com/"

//these 2 will be the email and discord tag
const email= ""
const discord= ""


function ProfileAlex() {
  return (

    <div className="Alex-Profile">
      <Navigation></Navigation>
      <ProfileIntro
        userName= {name}
        userImage= {image}
        userRoles= {roles}
      />
      <ProfileInfo
        userText= {text}
        userFacebook= {facebook}
        userTwitter= {twitter}
        userGithub= {github}
        userEmail= {email}
        userDiscord= {discord}
      />
      <FooterComp></FooterComp>
    </div>
  );
}


/* <NBar></NBar>
<ProfileIntro></ProfileIntro>
<ProfileInfo id="test"></ProfileInfo>
<FooterComp></FooterComp> */

export default ProfileAlex