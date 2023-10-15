import React, { useRef, useState } from "react";
import Button from "./Submit";
import Animation from "../animation";

const Login = ({ isLogin, setLogin }) => {
  const [isSpace, setSpace] = useState(-1);
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="h-full p-2 bg-gray-200 bg-welcome bg-no-repeat bg-cover">
      <div className="w-2/3 h-full flex bg-white items-center justify-evenly mx-auto rounded-lg">
        {/* login */}
        <div className="w-96  rounded-md py-20 shadow-lg">
          <div className="mx-10 h-full flex flex-col items-center">
            <div className="my-4 flex items-center">
              <div className="text-5xl font-extrabold ">Student Management</div>
            </div>

            <div className="flex flex-col justify-evenly w-full h-[70%] text-sm">
              <input
                ref={emailRef}
                type="text"
                placeholder="E-mail Address"
                onChange={handleChange}
                className="w-full h-11 border-[1px] rounded-sm p-2 mb-4"
              />
              {(isSpace == 0 || isSpace == 2) && (
                <div className="text-xs text-red-600">
                  Username/E-mail cannot contain whitespaces
                </div>
              )}
              <input
                ref={passwordRef}
                type="text"
                placeholder="Password"
                onChange={handleChange}
                className="w-full h-11 border-[1px] rounded-sm p-2 mb-4"
              />
              {(isSpace == 1 || isSpace == 2) && (
                <div className="text-xs text-red-600">
                  Password cannot contain whitespaces
                </div>
              )}
              <Button
                emailRef={emailRef}
                passwordRef={passwordRef}
                isSpace={isSpace}
              />
            </div>

            <div>
              New Here?{" "}
              <span
                onClick={() => setLogin(!isLogin)}
                className="cursor-pointer text-blue-800"
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
        {/* lottie animate */}
        <Animation width={"400px"} height={"400px"} />
      </div>
    </div>
  );

  function handleChange(e) {
    if (
      emailRef.current.value.trim().includes(" ") &&
      passwordRef.current.value.trim().includes(" ")
    ) {
      setSpace(2);
    } else if (passwordRef.current.value.trim().includes(" ")) setSpace(1);
    else if (emailRef.current.value.trim().includes(" ")) setSpace(0);
    else setSpace(-1);
  }
};

export default Login;
