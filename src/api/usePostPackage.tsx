import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { instance } from "./instance";

type UsePostPackageProps = {
  data?: {
    countryName: string | null;
    privacy: string | null;
    saveState: string | null;
    periodOrder: number | null;
    offset: number;
    limit: number;
  };
  countrySelect: string | null;
  privacy: string | null;
  deleteActive: boolean;
  save: string | null;
  changeActive: boolean;
  copyActive: boolean;
  packagePeriod: boolean;
  setCopyActive: Dispatch<SetStateAction<boolean>>;
};

type ResponseContent = {
  packageId: number;
  packageName: string;
  countryName: string;
  period: number;
  privacy: string;
  saveState: string;
};
export const usePostPackage = ({
  data,
  countrySelect,
  privacy,
  deleteActive,
  save,
  changeActive,
  copyActive,
  setCopyActive,
  packagePeriod,
}: UsePostPackageProps) => {
  const [packageList, setPackageList] = useState<ResponseContent[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.post(
          `http://13.124.147.192:8080/packages`,
          data
        );

        setPackageList(response.data.data.content);
        setCopyActive(false);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, [
    countrySelect,
    privacy,
    deleteActive,
    save,
    changeActive,
    copyActive,
    packagePeriod,
  ]);
  return { packageList, privacy };
};
