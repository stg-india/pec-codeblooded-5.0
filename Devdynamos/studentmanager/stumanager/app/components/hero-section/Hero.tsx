"use client"

import React from "react";
import "./herostyles.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
// import { ClientRequest } from "http";

export const Hero = () => {
  const router = useRouter()
  return (
    <div className="hero">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="banner">
              <motion.div
                className="div"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.75 }}
                whileHover={{ scale: 1.02 }}
              >
                <img className="oval" alt="Oval" src="oval.svg" />
                <img className="fill" alt="Fill" src="fill-42.svg" />
                <img className="img" alt="Fill" src="fill-57.svg" />
                <img
                  className="fill-copy"
                  alt="Fill copy"
                  src="fill-57-copy.svg"
                />
                <img className="fill-2" alt="Fill" src="fill-58.svg" />
                <img className="fill-3" alt="Fill" src="fill-64.svg" />
                <img className="fill-4" alt="Fill" src="fill-65.svg" />
                <img className="fill-5" alt="Fill" src="fill-72.svg" />
                <img
                  className="fill-copy-2"
                  alt="Fill copy"
                  src="fill-72-copy.svg"
                />
                <img className="fill-6" alt="Fill" src="fill-84.svg" />
                <img className="fill-7" alt="Fill" src="fill-88.svg" />
                <div className="group">
                  {/* <div className="div-wrapper">
                    <div className="text-wrapper">Learn More</div>
                  </div> */}
                </div>
                <div className="welcome-back-diane mb-10" style={{fontSize:'2rem', fontFamily:'cursive'}}>WELCOME BACK!</div>
                {/* <p className="you-have-completed my-10" style={{fontSize:'1.5rem'}}>
                  You have completed 60% of your goal this week!
                  <br />
                  start a new goal and improve your result
                </p> */}
                <img className="artboard" alt="Artboard" src="artboard-7.svg" />
              </motion.div>
            </div>
            {/* <div className="text-wrapper-2">Previous Student </div> */}
          </div>
          <div className="overlap-2">
            <div className="ellipse-2" />
            {/* <img className="rectangle-2" alt="Rectangle" src="rectangle-15.svg" /> */}
            <motion.button
              className="rectangle"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              onClick={()=>{router.push('/audit')}}
            >
              Previous Student Audit
            </motion.button>
            <motion.button
              className="rectangle-2"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              onClick={()=>{router.push('/register')}}
            >
              Register New Student
            </motion.button>
            {/* <div className="text-wrapper-3">Register New Student</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};