import React, { useEffect, useState } from "react";
import { useLogin } from "./loginApi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../setup/hooks/useAuth";
const Button = ({ emailRef, passwordRef, isSpace }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  
  const [status, isLoading, CallApi] = useLogin();
  const [isError, setError] = useState();

  const handleClick = () => {
    if (isSpace != -1) return;
    if (emailRef.current.value.trim() == "") {
      setError("Username cannot be empty");
      return;
    }
    if (passwordRef.current.value.trim() == "") {
      setError("Password cannot be empty");
      return;
    }
    CallApi({
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    });
  };

  useEffect(() => {
    if (status == 200) {
      setTimeout(() => {
        const from = location.state?.from?.pathname || `/profile/${auth.email}`;
        navigate(from, { replace: true });
      }, 2000);
    }
    if (status == 401) {
      setError("Credentials do not match our records");
    }
    if (status == 500) {
      setError("Internal Server Error");
    }
  }, [status]);
  return (
    <>
      {isError && <div className="text-xs text-red-600">{isError}</div>}
      <button
        className="w-full h-11 bg-purple-gradient text-white rounded-md"
        onClick={handleClick}
        disabled= {isLoading}
      >
        {isLoading || status == 200 ? (
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          "Sign In"
        )}
      </button>
    </>
  );
};

export default Button;
