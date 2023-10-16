import useAxiosPrivate from "./useAxiosPrivate";
import { useMutation } from "react-query";
import { useState } from "react";
import { toast } from "react-toastify";
const useSubmit = () => {

  const axiosPrivate= useAxiosPrivate()
  const [status, setStatus] = useState();
  const [isDone, setIsDone] = useState(false);
  const { data, mutate, isLoading } = useMutation(apiCall, {
    onSuccess: (res) => {
      setStatus(res.status);
      toast.success("Successfully Updated", {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto-close time in milliseconds
        hideProgressBar: false, // Display progress bar
        closeOnClick: true, // Close on click
        pauseOnHover: true, // Pause on hover
      });
      console.log('success bro')
    },
    onError: (err) => {
        toast.success("Something Went Wrong", {
          position: "top-right", // Position of the toast
          autoClose: 3000, // Auto-close time in milliseconds
          hideProgressBar: false, // Display progress bar
          closeOnClick: true, // Close on click
          pauseOnHover: true, // Pause on hover
        });
      if (!err?.response) {
        setStatus(500);
      } else setStatus(err.response?.status);
    },
    onSettled: (res) => {
      setIsDone(true);
    },
    onMutate: (res) => {
      setIsDone(false)
    }
  });

  return [
    (url, obj)=>mutate({url:url, obj:obj}),
    isLoading,
    status,
    isDone,
    data
  ];
  
  async function apiCall({ url, obj }) {
    console.log(obj,url)
    const response = await axiosPrivate.post(url, obj.body, obj.query)
      return response;
  }
}
export default useSubmit;
