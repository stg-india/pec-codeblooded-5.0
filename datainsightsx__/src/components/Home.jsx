import React from 'react'
import vg from "../Assets/Logo1.jpeg"; 
const Home = () => {
  return (
    <>
        <div className="home1">
            <main>
                <img src={vg} alt="Logo" />
                <p>"Your Data, Your Insights: Unleash the Power of Analysis"</p>
            </main>
        </div>
    </>
  )
}

export default Home