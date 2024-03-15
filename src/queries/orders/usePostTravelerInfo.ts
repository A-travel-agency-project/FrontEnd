import { useMutation } from "@tanstack/react-query";
import { PostTravelerInfo } from "../../api/api";
import { UpdateTravelerReq } from "../../types/manager";

const usePostTravelerInfo = (req: UpdateTravelerReq) => {
  const { mutate, isError, error } = useMutation({
    mutationKey: ["postTravelerInfo"],
    mutationFn: () => PostTravelerInfo(req),
    retry: false,
  });
  return { mutate, isError, error };
};
export default usePostTravelerInfo;
