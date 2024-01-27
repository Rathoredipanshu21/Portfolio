import React from 'react';
// import Profile from "../Images/DIpanshu.jpg";
import './ContactPage.css';
import  facebookLogo from "../Images/facebook.png";
import  instaLogo from "../Images/instagram.png";
import  linkdinLogo from "../Images/linkedin.png";
import  whatsappLogo from "../Images/whatsapp.png";
import  githubLogo from "../Images/github.png";
import  gmailLogo from "../Images/gmail.png";

const ContactPage = () => {
    
  return (
    <div id="contact">
    
       <div className="social-sites">
        <ul>
        <li><a href="https://www.facebook.com/dipanshu.rathore.589/"></a><img src={facebookLogo} alt="" /></li>
        <li><img src={instaLogo} alt="" /></li>
        <li><img src={linkdinLogo} alt="" /></li>
        <li><img src={whatsappLogo} alt="" /></li>
        <li><img src={gmailLogo} alt="" /></li>
        <li><img src={githubLogo} alt="" /></li>
        </ul>
       </div>
       </div>
      
  )
}
export default ContactPage;
