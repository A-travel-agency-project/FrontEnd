import { useEffect, useState } from "react";
import { instance } from "./instance";

export const useGetAirlines = () => {
  const [airlines, setAirlines] = useState<string[]>([]);
  useEffect(() => {
    instance
      .get("airlines")
      .then((res) => setAirlines(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return { airlines };
};
