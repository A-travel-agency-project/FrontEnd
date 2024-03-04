import { useState } from "react";
import ScheduleList from "../components/TravelDetail/ScheduleList";
import {
  PRODUCT_INFO_CATEGORIES,
  SCHEDULE_INFO_CATEGORIES,
} from "../constants/productdata";
import ScheduleInfo from "../components/TravelDetail/ScheduleInfo";
import CategoryBtns from "../components/TravelDetail/CategoryBtns";
import ProductInfo from "../components/TravelDetail/ProductInfo";
import PackageDetail from "../components/TravelDetail/PackageDetail";
import ProductDetail from "../components/TravelDetail/ProductDetail";
import ReservationBox from "../components/TravelDetail/ReservationBox";
// import { useLocation } from "react-router-dom";
// import useGetProduct from "../queries/products/useGetProduct";
import { commonDate } from "../utils/commonDate";
import { daysAndNightFormat } from "../utils/daysAndNightFormat";
import { Product } from "../types/product";

const TravelDetail = () => {
  // const { state } = useLocation();
  const [showScheduleInfo, setShowScheduleInfo] = useState<
    "hotelInfo" | "scheduleList" | "regionInfo" | "terms"
  >("scheduleList");
  const [showProductInfo, setShowProductInfo] = useState<string>("keyPoint");
  // const { isPending, isError, error } = useGetProduct(state);
  const data = {
    packageInfo: {
      packageId: 17,
      packageName: "프랑스위스 6박 7일",
      summary: "프랑스와 스위스를 오가는 힐링여행",
      period: 6,
      privacy: "공개",
      countryName: "프랑스위스",
      price: 0,
      hashTag: "쇼핑없어요 인생사진찍어요 여름방학",
      hotelInfo: "hotel_infoMd",
      regionInfo: "region_infoHtml",
      terms: "termsHtml",
      thumbnailList: [
        {
          originalImageName: "스크린샷 2024-02-04 000730.png",
          uploadImageName: "5c274b6d-8f09-4eff-8c5f-c62bf8ab8d07.png",
          imagePath: "thumbnails/2024/02/21",
          imageUrl:
            "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2024/02/21/5c274b6d-8f09-4eff-8c5f-c62bf8ab8d07.png",
        },
      ],
      scheduleList: [
        {
          scheduleId: 1,
          day: 1,
          dayContent: "contentHtml",
          hotel: "hotel1",
          meal: "meal1",
          vehicle: "vehicle1",
        },
        {
          scheduleId: 2,
          day: 2,
          dayContent: "contentHtml",
          hotel: "hotel2",
          meal: "meal2",
          vehicle: "vehicle2",
        },
      ],
      checkedTagList: null,
    },
    productInfo: {
      productId: 1,
      productCode: "EW12402211701AA",
      startDate: "2023-10-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      minCount: 30,
      maxCount: 50,
      nowCount: 0,
      productState: "예약 가능",
      airline: "아메리칸항공",
      price: 50000000,
      flagCarrier: 0,
      tourConductor: 0,
      shopping: 1,
      optionalTour: 1,
      adultPrice: 10000,
      adultSurcharge: 20000,
      childPrice: 30000,
      childSurcharge: 40000,
      infantPrice: 50000,
      infantSurcharge: 60000,
      keyPoint: "핵심 키포인트",
      includedProduct: "포함 상품",
      excludedProduct: "비포함 상품",
      reservationNotice: "예약정보",
      travelRegion: "여행지역 정보",
    },
  };

  const handleScheduleInfo = (
    id: "hotelInfo" | "scheduleList" | "regionInfo" | "terms"
  ) => {
    setShowScheduleInfo(id);
  };

  const handleProductInfo = (id: string) => {
    setShowProductInfo(id);
  };

  const prices: {
    age: "성인" | "아동" | "유아";
    price: number;
    surcharge: number;
  }[] = data
    ? [
        {
          age: "성인",
          price: data?.productInfo?.adultPrice,
          surcharge: data?.productInfo?.adultSurcharge,
        },
        {
          age: "아동",
          price: data?.productInfo?.childPrice,
          surcharge: data?.productInfo?.childSurcharge,
        },
        {
          age: "유아",
          price: data?.productInfo?.infantPrice,
          surcharge: data?.productInfo?.infantSurcharge,
        },
      ]
    : [
        {
          age: "성인",
          price: 0,
          surcharge: 0,
        },
        {
          age: "아동",
          price: 0,
          surcharge: 0,
        },
        {
          age: "유아",
          price: 0,
          surcharge: 0,
        },
      ];

  const reservationInfo = data
    ? {
        packageName: data?.packageInfo?.packageName,
        period: daysAndNightFormat(data?.packageInfo?.period),
        startDate: commonDate(data?.productInfo?.startDate),
        endDate: commonDate(data?.productInfo?.endDate),
        airline: data?.productInfo?.airline,
      }
    : {
        packageName: "",
        period: "",
        startDate: "",
        endDate: "",
        airline: "",
      };

  // if (isPending) {
  //   return <div>로딩 중...</div>;
  // }

  // if (isError) {
  //   return <div>에러 발생: {error?.message}</div>;
  // }
  // if (!data) {
  //   return <div>데이터가 없습니다.</div>;
  // }
  return (
    <div className="w-full flex flex-col items-center gap-[46px] py-[216px]">
      <PackageDetail info={data.packageInfo} />
      <div className="flex justify-between w-[765px]">
        <ProductDetail info={data.productInfo} prices={prices} />
        <ReservationBox
          prices={prices}
          maxCount={data.productInfo.maxCount}
          nowCount={data.productInfo.nowCount}
          info={reservationInfo ?? reservationInfo}
        />
      </div>
      <section className="flex flex-col items-center gap-[16px]">
        <CategoryBtns
          category={PRODUCT_INFO_CATEGORIES}
          handleClick={handleProductInfo}
          active={showProductInfo}
        />
        {showProductInfo === "includedProduct" ? (
          <ProductInfo
            info1={data.productInfo.includedProduct}
            info2={data.productInfo.excludedProduct}
          />
        ) : (
          <ProductInfo
            info1={data.productInfo[showProductInfo as keyof Product]}
          />
        )}
      </section>
      <section className="flex flex-col items-center gap-[16px]">
        <CategoryBtns
          category={SCHEDULE_INFO_CATEGORIES}
          handleClick={handleScheduleInfo}
          active={showScheduleInfo}
        />
        <div className="flex flex-col gap-[43px]">
          {showScheduleInfo === "scheduleList" ? (
            <ScheduleList scheduleListData={data.packageInfo.scheduleList} />
          ) : (
            <ScheduleInfo info={data.packageInfo[showScheduleInfo]} />
          )}
        </div>
      </section>
    </div>
  );
};

export default TravelDetail;
