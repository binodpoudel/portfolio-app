import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'



const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            I did a one year web development 
          </span>
          <span>Course at the Digital Career Institute in Leipzig, Germany.</span>
          <span className='about' style={{ color: "orange", fontSize: "0.8rem"  }}>
            Frontend Developer :- HTML, CSS, JavaScript, React and React Hooks, React Router, Redux and Context API, BootStraps, Material UI, GitHub team workflow. 
                <br />
                <br />
            Backend Developer :- Node.js, Express.js, JWT and Authentication methods, Rest APIs.
            <br />
            Database:- MongoDB, Mongoose.
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
      </div>
    </div>
  );
};

export default Works;
