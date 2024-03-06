import { useLocation } from "react-router-dom";
import ProductInfo from "../components/Reservation/ProductInfo";
import { daysAndNightFormat } from "../utils/daysAndNightFormat";
import { commonDate } from "../utils/commonDate";
import UserInfo from "../components/Reservation/UserInfo";
import TravelerInfo from "../components/Reservation/TravelerInfo";
import PriceInfo from "../components/Reservation/PriceInfo";
import { useState } from "react";
import Payment from "../components/Reservation/Payment";
import { PayableState, TermsState, travelerInfo } from "../types/reservation";
import Terms from "../components/Reservation/Terms";

const Reservation = () => {
  const location = useLocation();
  const { productInfo, priceInfo } = location.state || {};
  const [travelerInfoList, setTravelerInfoList] = useState<travelerInfo[]>([]);

  const [checkList, setCheckList] = useState<PayableState>({
    travel: false,
    refund: false,
    privacy: false,
    identification: false,
    thirdperson: false,
    marketing: false,
    travelerInfo: false,
  });

  const handleCheck = (id: string) => {
    setCheckList((prev) => ({
      ...prev,
      [id]: !prev[id as keyof TermsState],
    }));
  };

  const handleAllAgree = (checked: boolean) => {
    //약관 전체 동의
    setCheckList((prev) => {
      const newCheckList = { ...prev };
      Object.keys(newCheckList).forEach((key) => {
        if (key !== "travelerInfo" && checked) {
          newCheckList[key as keyof PayableState] = true;
        } else if (key !== "travelerInfo" && !checked) {
          newCheckList[key as keyof PayableState] = false;
        }
      });
      return newCheckList;
    });
  };

  const [showPayment, setShowPayment] = useState(false);

  const handlePayment = () => {
    setShowPayment(true);
  };

  const handleInfoValid = (list: travelerInfo[]) => {
    setTravelerInfoList(list);
  };

  console.log(productInfo, priceInfo);
  const info = productInfo
    ? productInfo
    : {
        packageName: "프랑스위스 6박 7일",
        period: daysAndNightFormat(6),
        startDate: commonDate("2023-10-12T07:51:01"),
        endDate: commonDate("2023-10-12T07:51:01"),
        airline: "아시아나항공",
        productId: 1,
      };

  return (
    <div className="flex flex-col items-center gap-[80px] py-[216px] ">
      {showPayment ? (
        <Payment
          travelerInfoList={travelerInfoList}
          priceInfo={priceInfo}
          productId={productInfo.productId}
        />
      ) : (
        <>
          <h1 className="text-main-color text-[20px] font-bold mt-[38px]">
            예약하기
          </h1>
          <ProductInfo info={info} />
          <UserInfo />
          <TravelerInfo
            priceInfo={priceInfo}
            handleInfoValid={handleInfoValid}
            handleCheck={handleCheck}
          />
          <Terms
            handleCheck={handleCheck}
            handleAllAgree={handleAllAgree}
            checkList={checkList}
          />
          <PriceInfo
            priceInfo={priceInfo}
            handlePayment={handlePayment}
            payable={Object.keys(checkList)
              .filter((key) => key !== "marketing")
              .every((key) => checkList[key as keyof PayableState])} // 선택약관을 제외한 모든 체크박스 체크
          />
        </>
      )}
    </div>
  );
};

export default Reservation;
