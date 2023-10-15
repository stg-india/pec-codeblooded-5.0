import axios from "../api/axios";
import useAuth from "./useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

       localStorage.setItem(
        "auth",
         JSON.stringify({
          email: response.data.email,
          accessToken: response.data.accessToken,
        })
      );

       setAuth({
        email: response.data.email,
        accessToken: response.data.accessToken,
      });
     
      return {email:response.data.email, newAccessToken:response.data.accessToken};
    } catch (err) {
      navigate("/login", { state: { from: location } });
    }
  };
  return refresh;
};

export default useRefreshToken;
