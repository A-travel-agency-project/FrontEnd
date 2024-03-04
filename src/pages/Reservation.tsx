import { useLocation } from "react-router-dom";
import ProductInfo from "../components/Reservation/ProductInfo";
import { daysAndNightFormat } from "../utils/daysAndNightFormat";
import { commonDate } from "../utils/commonDate";
import UserInfo from "../components/Reservation/UserInfo";
import TravelerInfo from "../components/Reservation/TravelerInfo";
import PriceInfo from "../components/Reservation/PriceInfo";

const Reservation = () => {
  const location = useLocation();
  const { productInfo, priceInfo } = location.state || {};

  console.log(productInfo, priceInfo);
  const info = productInfo
    ? productInfo
    : {
        packageName: "프랑스위스 6박 7일",
        period: daysAndNightFormat(6),
        startDate: commonDate("2023-10-12T07:51:01"),
        endDate: commonDate("2023-10-12T07:51:01"),
        airline: "아시아나항공",
      };
  return (
    <div className="flex flex-col items-center gap-[80px] py-[216px]">
      <h1 className="text-main-color text-[20px] font-bold mt-[38px]">
        예약하기
      </h1>
      <ProductInfo info={info} />
      <UserInfo />
      <TravelerInfo />
      <PriceInfo priceInfo={priceInfo} />
    </div>
  );
};

export default Reservation;
