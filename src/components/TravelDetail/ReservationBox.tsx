import { useNavigate } from "react-router-dom";
import CountBtn from "./CountBtn";
import { useState } from "react";
import { ReservationBoxProps } from "../../types/reservation";

const ReservationBox = ({
  prices,
  maxCount,
  nowCount,
  info,
}: ReservationBoxProps) => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    성인: {
      count: 0,
      totalPrice: 0,
    },
    아동: {
      count: 0,
      totalPrice: 0,
    },
    유아: {
      count: 0,
      totalPrice: 0,
    },
    totalPay: 0,
    totalCount: 0,
  });

  const handleCountChange = (
    age: "성인" | "아동" | "유아",
    newCount: number
  ) => {
    setCounts((prev) => {
      const newTotalPrice = getPrice(age, newCount);
      const priceDifference = newTotalPrice - (prev[age]?.totalPrice || 0);
      const totalCount = prev.totalCount - prev[age].count + newCount;
      return {
        ...prev,
        [age]: {
          ...prev[age],
          count: newCount,
          totalPrice: newTotalPrice,
        },
        totalPay: prev.totalPay + priceDifference,
        totalCount: totalCount,
      };
    });
  };

  const handleReserve = () => {
    navigate("/reservation", {
      state: { productInfo: info, priceInfo: counts },
    });
  };
  const getPrice = (age: string, newCount: number) => {
    const priceInfo = prices.filter((item) => item.age === age);
    console.log(priceInfo);
    return newCount * (priceInfo[0].surcharge + priceInfo[0].price);
  };

  return (
    <div
      className="flex flex-col items-center w-[250px] px-[18px] py-[22px] gap-[20px] 
    border-[1px] border-main-color rounded-[17px] text-sub-black"
    >
      {prices.map((item) => (
        <CountBtn
          key={item.age}
          age={item.age}
          price={item.price}
          onCountChange={handleCountChange}
        />
      ))}
      <div
        className="flex justify-between border-y-[1px] border-dashed 
      border-main-color w-full text-[20px] py-[15px] items-center"
      >
        <span className="font-bold text-main-color">총계</span>
        <span>{counts.totalPay}</span>
      </div>
      <button
        className="bg-main-color w-[198px] h-[59px] rounded-[19px] text-white
        disabled:bg-sub-black disabled:bg-opacity-[0.3]"
        disabled={counts["성인"].count < 1}
        onClick={handleReserve}
      >
        예약하기
      </button>
      <div>
        현재 재고 {nowCount}/{maxCount}
      </div>
    </div>
  );
};
export default ReservationBox;
