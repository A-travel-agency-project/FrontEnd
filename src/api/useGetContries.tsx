import { useEffect, useState } from "react";
import { baseInstance } from "./instance";

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
        const response = await baseInstance.get(
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
