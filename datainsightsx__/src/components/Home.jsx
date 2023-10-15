import React from 'react'
import vg from "../Assets/Logo1.jpeg"; 
import vg2 from "../Assets/2.webp"; 
import {Typewriter} from "react-simple-typewriter"; 
import "react-simple-typewriter"; 
const Home = () => {
  return (
    <>
        <div className="home1" id ="home">
            <main>
                <img src={vg} alt="Logo" />
                <div className='Writer'>
                <Typewriter
                words={['Your Data, Your Insights: Unleash the Power of Analysis']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                /> 
                </div>
                <div>
                Transform your raw data into actionable insights with our cutting-edge data analysis platform. 
                </div>

            </main>
        </div>
        <div className="home2" id ="about">
          <img src={vg2} alt="Graphics" />
            <div>
              <h1>Who we Are?</h1>
              <p>
              We're diving into years of H1B data, extracting valuable insights without the computational bulk. 
              Our focus is on precision: counting records, finding average salaries, and identifying middle and upper income brackets. 
              With a keen eye on efficiency, we're streamlining these analyses, ensuring a seamless experience for our users.
              We're not just crunching numbers; we're deciphering trends, highlighting outliers, and unveiling nuanced employment patterns within the data. 
              Our commitment to clarity and efficiency drives us to present complex findings in an accessible manner, empowering users to make informed decisions confidently.
              </p>
            </div>
        </div>
    </>
  )
}

export default Home