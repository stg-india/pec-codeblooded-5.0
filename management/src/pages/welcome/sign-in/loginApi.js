import { useState } from "react";
import { useMutation } from "react-query";
import useAuth from "../../../setup/hooks/useAuth";
import axios from "../../../setup/api/axios";

export const useLogin = () => {
  // Global Auth Context
  const {setAuth} = useAuth();

  const apiCall = async (data) => {
    console.log(data);
    const response = await axios.post(
      "/login",
      {
        email: data.email,
        password: data.password,
      },
      {
        headers:{'Content-Type': 'application/json'},
        withCredentials: true,
      }
    )
    return response;
  }

  const [status, setStatus] = useState(0);
  const { mutate, isLoading } = useMutation(apiCall, {
    onSuccess: (response) => {
      const accessToken = response.data?.accessToken;
      const email = response.data?.email;
      setAuth({ email, accessToken });
      setStatus(response.status);
      //Store details in localstorage
      localStorage.setItem("auth", JSON.stringify({ email, accessToken }));
    },
    onError: (err) => {
      if (!err?.response) {
        setStatus(500);
      } else setStatus(err.response.status);
    }
  })

  return [status, isLoading, (data) => mutate(data)]
}
