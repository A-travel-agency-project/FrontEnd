import { useEffect, useState } from "react";
import { instance } from "./instance";

type UsePostPackageProps = {
  data?: {
    countryName: string | null;
    privacy: string | null;
    saveState: string | null;
    countryOrder: number | null;
    periodOrder: number | null;
    saveOrder: number | null;
    privacyOrder: number | null;
    offset: number;
    limit: number;
  };
  countrySelect: string | null;
  privacy: string | null;
  deleteActive: boolean;
  arrowState: { [key: string]: boolean };
  save: string | null;
  changeActive: boolean;
};
// type Response = {
//   code: number;
//   data: {
//     content: {
//       packageId: number;
//       packageName: string;
//       countryName: string;
//       period: number;
//       privacy: string;
//       saveState: string;
//     }[];
//     empty: boolean;
//     first: boolean;
//     last: boolean;
//     number: 0;
//     numberOfElements: number;
//     pageable: {
//       offset: number;
//       pageNumber: number;
//       pageSize: number;
//       paged: boolean;
//       sort: {
//         empty: boolean;
//         sorted: boolean;
//         unsorted: boolean;
//       };
//       unpaged: boolean;
//     }[];
//     size: number;
//     sort: { empty: boolean; sorted: boolean; unsorted: boolean };
//     totalElements: number;
//     totalPages: number;
//   };
//   message: string;
// };
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
  arrowState,
  save,
  changeActive,
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
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
  }, [countrySelect, privacy, deleteActive, arrowState, save, changeActive]);
  return { packageList, privacy };
};
