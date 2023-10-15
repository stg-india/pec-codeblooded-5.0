import React from 'react'
import vg from "../Assets/Logo1.jpeg"; 
import vg2 from "../Assets/2.webp"; 
import {Typewriter} from "react-simple-typewriter"; 
import "react-simple-typewriter"; 
const Home = () => {
  return (
    <>
        <div className="home1">
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
        <div className="home2">
          <img src={vg2} alt="Graphics" />
            <div>
              <h1>Who we Are?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt commodi aliquam nam 
                labore ullam rerum deleniti animi harum suscipit corrupti atque eaque iste corporis sed 
                omnis debitis, tempore dignissimos? In.
              </p>
            </div>
        </div>
    </>
  )
}

export default Home