import { useState } from "react";

type CountBtnProps = {
  age: string;
  price: number;
  onCountChange: (age: string, newCount: number) => void;
};

const CountBtn = ({ age, price, onCountChange }: CountBtnProps) => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    const newCount = Math.max(0, count - 1);
    setCount(newCount);
    onCountChange(age, newCount);
  };

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(age, newCount);
  };
  return (
    <div className="flex justify-between w-[198px]">
      <div className="flex flex-col text-[14px] text-sub-black">
        <span className="text-main-color font-bold">{age}</span>
        <span>{price}원</span>
      </div>
      <div className="flex gap-[22px] items-center">
        <button
          type="button"
          onClick={handleDecrease}
          className="text-[#707070]"
        >
          -
        </button>
        <span className="text-main-color">{count}</span>
        <button
          type="button"
          onClick={handleIncrease}
          className="text-[#707070]"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CountBtn;
