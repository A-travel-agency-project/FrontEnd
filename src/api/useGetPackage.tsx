import { useEffect, useState } from "react";
import { instance } from "./instance";

interface ProductItem {
  packageId: number;
  packageName: string;
}

export const useGetPackage = () => {
  const [packagesList, setPackagesList] = useState<ProductItem[]>([]);

  useEffect(() => {
    instance
      .get("/packages/simple")
      .then((res) => setPackagesList(res.data.data));
    const fetchData = async () => {
      try {
        const response = await instance.get("packages/simple");
        setPackagesList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return { packagesList };
};
