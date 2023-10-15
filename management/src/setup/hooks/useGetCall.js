import useAxiosPrivate from "./useAxiosPrivate";
import { useQuery } from "react-query";
import axios from "../api/axios";
const useGetCall = (params) => {
  const axiosPrivate = useAxiosPrivate();
  const {data, isLoading, status } = useQuery(['useGetCall', params], ({signal})=>apiCall(params, signal), {refetchOnWindowFocus:true,cacheTime:0})

    return [
    data,
    isLoading,
    status
  ];

  async function apiCall({ url, query }, signal) {
    try {   
      const response = await axiosPrivate.get(url, { ...query, signal });
      return response;
    }
    catch (err) {
      console.log(err);
    }
  }
};
export default useGetCall;
