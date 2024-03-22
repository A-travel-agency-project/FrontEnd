import { useQuery } from "@tanstack/react-query";
import { GetUserChildName } from "../../api/api";

const useGetUserChildName = () => {
  const { data, isError } = useQuery({
    queryKey: ["getUserChildName"],
    queryFn: GetUserChildName,
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isError };
};

export default useGetUserChildName;
