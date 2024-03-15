import ManagerTitle from "../../components/Manager/ManagerTitle";
import { useParams } from "react-router-dom";
import useGetOrderDetail from "../../queries/orders/useGetOrderDetail";
import CategoryBtns from "../../components/TravelDetail/CategoryBtns";
import { ORDER_DETAIL_CATEGORIES } from "../../constants/managerdata";
import { useState } from "react";
import OrderInfo from "../../components/Manager/orderDetail/OrderInfo";

const OrderDetail = () => {
  const { id } = useParams();

  // const { data, isPending, isError, error } = useGetOrderDetail(id ?? "");
  // console.log(data);

  const [showInfo, setShowInfo] = useState("orderInfo");

  const handleShowInfo = (id: string) => {
    setShowInfo(id);
  };

  const data = {
    memo: "ㅇㅇ",
    additionalPrice: 300000,
    imomOrderId: "아이맘주문아이디",
    orderDate: "2024-02-28 14:06:18",
    reserveUser: "김우리",
    packageName: "공개 패키지",
    productCode: "1번상품",
    startDate: "2024-10-11 11:11:11",
    endDate: "2024-10-20 11:11:11",
    adultCount: 4,
    childCount: 0,
    infantCount: 0,
    totalCount: 4,
    totalPrice: 233332,
    birth: "1999-11-11",
    email: "nae@naem.xom",
    gender: "여",
    orderState: "결제대기",
    phoneNumber: "010-2023-2233",
    payedPrice: 12340,
    balance: 111116,
    orderNumberList: [
      "주문번호1",
      "주문번호2", // 토스 결제 정보 요청용
    ],
    travelerInfos: [
      {
        travelerName: "여행자1",
        enFirstName: "Kim",
        enLastName: "Mina",
        gender: "남",
        birth: "1999-11-11",
        phoneNumber: "010-2222-2222",
        representative: true,
      },
      {
        travelerName: "여행자2",
        enFirstName: "Kim",
        enLastName: "Minaaa",
        gender: "여",
        birth: "1999-11-11",
        phoneNumber: "",
        representative: false,
      },
      {
        travelerName: "여행자3",
        enFirstName: "Kim",
        enLastName: "Minaaaaa",
        gender: "여",
        birth: "1999-11-11",
        phoneNumber: "010-2010-3333",
        representative: false,
      },
      {
        travelerName: "여행자4",
        enFirstName: "Kim",
        enLastName: "M",
        gender: "여",
        birth: "1999-11-11",
        phoneNumber: "",
        representative: false,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-10 w-full mr-20 mb-50 mt-[60px]">
      <CategoryBtns
        category={ORDER_DETAIL_CATEGORIES}
        handleClick={handleShowInfo}
        active={showInfo}
      />
      {showInfo === "orderInfo" && data ? (
        <OrderInfo data={data} />
      ) : (
        <div>
          <ManagerTitle title="결제정보" />
        </div>
      )}
      <div className="h-[60px]" />
    </div>
  );
};

export default OrderDetail;
