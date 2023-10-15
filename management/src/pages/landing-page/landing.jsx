import React, { useState } from "react";
import Signup from "../welcome/signup/signup";
import Login from "../welcome/sign-in/signin";

const Landing = ({current}) => {
  const [isLogin, setLogin] = useState(current);
  return (
    <>
      {isLogin ? 
        <Login isLogin={isLogin} setLogin={setLogin} />
       : 
        <Signup isLogin={isLogin} setLogin={setLogin} />
      }
    </>
  );
};

export default Landing;
