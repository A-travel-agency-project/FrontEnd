import { useQuery } from "@tanstack/react-query";
import { GetBanner } from "../../api/api";

const useGetBanners = (view: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["getBanners", view],
    queryFn: () => GetBanner(view),
    refetchOnWindowFocus: false,
    retry: false,
  });
  return { data, isPending, isError, error };
};

export default useGetBanners;
