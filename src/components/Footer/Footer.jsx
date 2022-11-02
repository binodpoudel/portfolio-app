import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Slack from '@iconscout/react-unicons/icons/uil-slack';
import Google from '@iconscout/react-unicons/icons/uil-at';



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "350px" }} />
      <div className="f-content">
        <span>footandshadows@gmail.com</span>
        <span>+4917676688107</span>
        <div className="f-icons">
        <a href='https://github.com/binodpoudel/portfolio-app' target='_blank' rel='noreferrer'>
           <Github color="white" size={"3rem"} />
          </a>
          <a href='https://slack.com' target='_blank' rel='noreferrer'>
           <Slack color="white" size={"3rem"} />
          </a>
          <a href='https://www.linkedin.com/in/binod-poudel-a547281b2/' target='_blank' rel='noreferrer'>
           <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href='https://gmail.com/' target='_blank' rel='noreferrer'>
           <Google color="white" size={"3rem"} />
          </a>
        </div>
        <div>
          <small className='website-rights'>&copy;{new Date().getFullYear()}  All RIGHT RESERVED</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
