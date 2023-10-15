import useAxiosPrivate from "./useAxiosPrivate";
import { useQuery } from "react-query";

const useGetCall = (params) => {
  const axiosPrivate = useAxiosPrivate();
  const {data, refetch, isLoading, status } = useQuery(['useGetCall', params], ({signal})=>apiCall(params, signal), {refetchOnWindowFocus:true,cacheTime:0})

    return [
      data,
      refetch,
    isLoading,
    status
  ];

  async function apiCall({ url, query }, signal) {
    console.log(url);
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
