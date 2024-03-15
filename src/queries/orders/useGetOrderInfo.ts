import { useQuery } from "@tanstack/react-query";
import { GetPaymentInfo } from "../../api/api";

const useGetPaymentInfo = (orderId: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getPaymentInfo"],
    queryFn: () => GetPaymentInfo(orderId),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};
export default useGetPaymentInfo;
