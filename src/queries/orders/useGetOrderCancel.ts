import { useQuery } from "@tanstack/react-query";
import { GetOrderCancel } from "../../api/api";

const useGetOrderCancel = (orderId: string, isCancel: boolean) => {
  const { data, isError, error } = useQuery({
    queryKey: ["getOrderCancel"],
    queryFn: () => GetOrderCancel(orderId),
    refetchOnWindowFocus: false,
    retry: false,
    enabled: isCancel,
  });
  return { data, isError, error };
};
export default useGetOrderCancel;
