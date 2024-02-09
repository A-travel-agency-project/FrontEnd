import { ProductInfoData } from "../../constants/productdata";
import PriceInfo from "./PriceInfo";
import SummaryTable from "./SummaryTable";

type ProductDetailProps = {
  info: ProductInfoData;
  prices: {
    age: string;
    price: number;
    surcharge: number;
  }[];
};

const ProductDetail = ({ info, prices }: ProductDetailProps) => {
  return (
    <div className="text-sub-black">
      <div className="flex flex-col gap-[20px]">
        <h2 className="font-bold text-main-color">여행개요</h2>
        <SummaryTable
          product_id={info.product_id}
          start_date={info.start_date}
          end_date={info.end_date}
          airline={info.airline}
          min_count={info.min_count}
        />
        <div className="w-[460px] flex ">
          <span className="text-[12px] border-[1px] border-main-color p-[6px]">
            여행지역
          </span>
          <span className="text-[10px] border-[1px] border-l-0 border-main-color p-[6px] grow">
            {info.travel_region}
          </span>
        </div>
        <div className="w-[460px]">
          <h2 className="font-bold text-main-color flex">여행 요금 안내</h2>
          <div className="flex w-full">
            {prices.map((item) => (
              <PriceInfo
                key={item.age}
                age={item.age}
                price={item.price}
                surcharge={item.surcharge}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
