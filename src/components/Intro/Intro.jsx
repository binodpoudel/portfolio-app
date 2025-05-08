import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/3.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Xing from "../../img/xing-2.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Slack from '@iconscout/react-unicons/icons/uil-slack';
import Google from '@iconscout/react-unicons/icons/uil-at';


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! My name is</span>
          <span>Binod Poudel</span>

          <span className="about">
           I am from the Himalayan country of Nepal. 
            <br />
           I am a full stack web developer located in Berlin, Germany. 
            <br />
           And I love to have fun doing coding!<br /> 
           Let's make something cool together!<br />
           Now seeking a job as a Front-end developer in Germany.
          </span>
          <span className="hire">
            Do you like my work?
            <br />
            Tell me your project idea and I will make it come true!

          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="intro-icons">
          <a href='https://github.com/binodpoudel' target='_blank' rel='noreferrer'>
           <Github color="white" size={"3rem"} />
          </a>
          <a href='https://slack.com' target='_blank' rel='noreferrer'>
           <Slack color="white" size={"3rem"} />
          </a>
          <a href='https://www.linkedin.com/in/binod-poudel-a547281b2/' target='_blank' rel='noreferrer'>
           <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href='https://www.xing.com/profile/Binod_Poudel2/cv' target='_blank' rel='noreferrer'>
           <img src= { Xing } alt="" />
          </a>
          <a href='https://gmail.com/' target='_blank' rel='noreferrer'>
           <Google color="white" size={"3rem"} />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
         <img src={me} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Full-Stack Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Design" text2="UI / UX" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

/* 
<Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */
      /*  <div className="i-icons">
          <img src={Github} color="white" size={"3rem"} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
          <img src={Xing} alt=""  />
        </div>
*/
