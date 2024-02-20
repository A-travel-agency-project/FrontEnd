import { useEffect, useState } from "react";
import { instance } from "./instance";
import { tagTitle } from "../constants/data";

type UseGetProps = {
  params: string;
};
type TagItem = {
  tagId: number;
  tagContent: string;
};
export const useGetTags = ({ params }: UseGetProps) => {
  const [tagsData, setTagsData] = useState<{ [key: string]: TagItem[] }>({});
  const [fetchState, setFetchState] = useState(true);
  const [tagLengths, setTagLengths] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `http://13.124.147.192:8080/${params}`
        );
        setTagsData(response.data.data);
        const lengths: { [key: string]: boolean } = {};
        tagTitle.forEach((el) => {
          lengths[el.category] = response.data.data[el.category]?.length < 10;
        });
        setTagLengths(lengths);
        setFetchState(false);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, [fetchState]);
  return { tagsData, setFetchState, tagLengths };
};
