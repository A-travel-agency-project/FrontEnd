import { useEffect, useState } from "react";
import { instance } from "./instance";

type UsePostPackageProps = {
  operation: string | null;
  ids: number[];
  changeActive: boolean;
  setChangeActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useChangePackage = ({
  operation,
  ids,
  changeActive,
  setChangeActive,
}: UsePostPackageProps) => {
  const [packageUpdate, setPackageUpdate] = useState<number | null>(null);
  if (changeActive && ids.length !== 0) {
    const fetchData = async () => {
      try {
        const response = await instance.post(
          `http://13.124.147.192:8080/packages/batch-update`,
          {
            operation: operation,
            ids: ids,
          }
        );
        setPackageUpdate(response.data.code);
        setChangeActive(false);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };
    fetchData();
  }

  return { packageUpdate };
};
