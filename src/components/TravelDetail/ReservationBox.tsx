import { Link } from "react-router-dom";
import CountBtn from "./CountBtn";
import { useState } from "react";

type ReservationBoxProps = {
  prices: {
    age: string;
    price: number;
    surcharge: number;
  }[];
  maxCount: number;
  nowCount: number;
};

const ReservationBox = ({
  prices,
  maxCount,
  nowCount,
}: ReservationBoxProps) => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  const handleCountChange = (age: string, newCount: number) => {
    setCounts((prev) => ({
      ...prev,
      [age]: newCount,
    }));
  };

  const totalPrice = prices.reduce((acc, item) => {
    const count = counts[item.age] || 0;
    // return acc + (item.price + item.surcharge) * count;
    return acc + item.price * count;
  }, 0);

  return (
    <div className="flex flex-col items-center w-[250px] px-[18px] py-[22px] gap-[20px] border-[1px] border-main-color rounded-[17px] text-sub-black">
      {prices.map((item) => (
        <CountBtn
          key={item.age}
          age={item.age}
          price={item.price}
          onCountChange={handleCountChange}
        />
      ))}
      <div className="flex justify-between border-y-[1px] border-dashed border-main-color w-full text-[20px] py-[15px] items-center">
        <span className="font-bold text-main-color">총계</span>
        <span>{totalPrice}</span>
      </div>
      <button className="bg-main-color w-[198px] h-[59px] rounded-[19px] text-white">
        <Link to={"/reservation"}> 예약하기</Link>
      </button>
      <div>
        현재 재고 {nowCount}/{maxCount}
      </div>
    </div>
  );
};
export default ReservationBox;
