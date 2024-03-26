import { amountFormat } from "../../utils/amountFormat";

const PriceInfo = ({
  age,
  price,
  surcharge,
}: {
  age: string;
  price: number;
  surcharge: number;
}) => {
  return price === 0 ? (
    <div className="flex flex-col items-center justify-center border-main-color border-[1px] first:border-r-0 last:border-l-0 w-full py-[16px] px-[12px] ">
      <span className="text-[12px]">{age}</span>
      <span className="text-[12px] text-red-700 text-center">
        {`${age}동반이 불가능한 상품입니다.`}
      </span>
    </div>
  ) : (
    <div className="flex flex-col items-center border-main-color border-[1px] first:border-r-0 last:border-l-0 w-full py-[16px] px-[12px]">
      <span className="text-[12px]">{age}</span>
      <span className="text-[14px]">{`${amountFormat(price)}원`}</span>
      <span className="text-[8px]">유류할증 포함</span>
      <span className="text-[14px]">{`${amountFormat(surcharge)}원`}</span>
    </div>
  );
};
export default PriceInfo;
