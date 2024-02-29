import { useEffect, useState } from "react";
import { instance } from "./instance";
import { tagTitle } from "../constants/data";
import { useRecoilState } from "recoil";
import { tagFetchState } from "../atom/atom";

type UseGetProps = {
  params: string;
};
type TagItem = {
  tagId: number;
  tagContent: string;
};
export const useGetContries = () => {
  const [countrys, setCountrys] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `http://13.124.147.192:8080/countries`
        );
        setCountrys(response.data.data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, []);
  return { countrys };
};
