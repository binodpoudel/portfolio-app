import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from '';


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span className="about" style={{ color: "#FCA61F" }}>
           
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "-4rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-14rem", top: "12rem" }}
          whileInView={{ left: "-9rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={" Frontend Developer"}
            detail={"Html5, CSS3, JavaScript (ES6+),  React Native, React, Hooks, Redux, BootStraps, Material UI,
                Tailwind CSS, Context API, React Router, UI/UX Design, Git Hub Team-Workﬂow,Agile Methodologies. " } />

        </motion.div>

        {/* 3rd card */}
        <motion.div
          initial={{ left: "11rem", top: "30rem" }}
          whileInView={{ left: "-9rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend Developer"}
            detail={"Nodejs, Express,MongoDB."}
          />

        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ top: "19rem", left: "10rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX design"}
            detail={
              ""
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
