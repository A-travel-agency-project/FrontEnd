import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostTravelerInfo } from "../../api/api";
import { UpdateTravelerReq } from "../../types/manager";
import { useState } from "react";

const usePostTravelerInfo = (req: UpdateTravelerReq) => {
  const [errorReason, setErrorReason] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const { mutate, isError, error } = useMutation({
    mutationKey: ["postTravelerInfo"],
    mutationFn: () => PostTravelerInfo(req),
    retry: false,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getOrderDetail"] }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const message = error?.response?.data?.message || error.message;
      setErrorReason(message);
    },
  });
  return { mutate, isError, error, errorReason };
};
export default usePostTravelerInfo;
