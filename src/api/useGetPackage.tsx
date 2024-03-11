import { useEffect, useState } from "react";
import { baseInstance } from "./instance";

interface ProductItem {
  packageId: number;
  packageName: string;
}

export const useGetPackage = () => {
  const [packagesList, setPackagesList] = useState<ProductItem[]>([]);

  useEffect(() => {
    baseInstance
      .get("/packages/simple")
      .then((res) => setPackagesList(res.data.data));
    const fetchData = async () => {
      try {
        const response = await baseInstance.get("packages/simple");
        setPackagesList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return { packagesList };
};
