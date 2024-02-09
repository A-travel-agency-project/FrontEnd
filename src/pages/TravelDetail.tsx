import { useState } from "react";
import ScheduleList from "../components/TravelDetail/ScheduleList";
import {
  PRODUCT_INFO_CATEGORIES,
  SCHEDULE_INFO_CATEGORIES,
  productdata,
} from "../constants/productdata";
import ScheduleInfo from "../components/TravelDetail/ScheduleInfo";
import CategoryBtns from "../components/TravelDetail/CategoryBtns";
import ProductInfo from "../components/TravelDetail/ProductInfo";
import PackageDetail from "../components/TravelDetail/PackageDetail";
import ProductDetail from "../components/TravelDetail/ProductDetail";
import ReservationBox from "../components/TravelDetail/ReservationBox";

const TravelDetail = () => {
  const [scheduleInfo, setScheduleInfo] = useState("schedule_list");
  const [productInfo, setProductInfo] = useState("key_point");
  const { package_info: packageInfoData, product_info: productInfoData } =
    productdata;

  const handleScheduleInfo = (id: string) => {
    setScheduleInfo(id);
  };

  const handleProductInfo = (id: string) => {
    setProductInfo(id);
  };

  const ProductData =
    productInfoData[productInfo as keyof typeof productInfoData];

  const ScheduleData =
    packageInfoData[scheduleInfo as keyof typeof packageInfoData];

  const prices = [
    {
      age: "성인",
      price: productInfoData.adult_price,
      surcharge: productInfoData.adult_surcharge,
    },
    {
      age: "아동",
      price: productInfoData.child_price,
      surcharge: productInfoData.child_surcharge,
    },
    {
      age: "유아",
      price: productInfoData.infant_price,
      surcharge: productInfoData.infant_surcharge,
    },
  ];

  return (
    <div className="py-[216px] w-full flex flex-col items-center gap-[46px]">
      <PackageDetail info={packageInfoData} />
      <div className="flex justify-between w-[765px]">
        <ProductDetail info={productInfoData} prices={prices} />
        <ReservationBox
          prices={prices}
          maxCount={productInfoData.max_count}
          nowCount={productInfoData.now_count}
        />
      </div>
      <section className="flex flex-col items-center gap-[16px]">
        <CategoryBtns
          category={PRODUCT_INFO_CATEGORIES}
          handleClick={handleProductInfo}
          active={productInfo}
        />
        {productInfo === "included_product" ? (
          <ProductInfo
            info1={`${ProductData}`}
            info2={productInfoData.excluded_product}
          />
        ) : (
          <ProductInfo info1={`${ProductData}`} />
        )}
      </section>
      <section className="flex flex-col items-center gap-[16px]">
        <CategoryBtns
          category={SCHEDULE_INFO_CATEGORIES}
          handleClick={handleScheduleInfo}
          active={scheduleInfo}
        />
        <div className="flex flex-col gap-[43px]">
          {scheduleInfo === "schedule_list" ? (
            <ScheduleList scheduleListData={packageInfoData.schedule_list} />
          ) : (
            <ScheduleInfo info={`${ScheduleData}`} />
          )}
        </div>
      </section>
    </div>
  );
};

export default TravelDetail;
