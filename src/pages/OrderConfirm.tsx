import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetUserOrderInfo from "../queries/orders/useGetUserOrderInfo";
import CategoryBtns from "../components/TravelDetail/CategoryBtns";
import { ORDER_DETAIL_CATEGORIES } from "../constants/managerdata";
import OrderedAmount from "../components/common/Order/OrderedAmount";
import OrderInfo from "../components/Manager/orderDetail/OrderInfo";
import PaymentInfo from "../components/Manager/orderDetail/PaymentInfo";

const OrderConfirm = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [orderConfirm, setOrderConfirm] = useState([]);
  console.log(orderConfirm);

  // const { data, isPending, isError, error } = useGetUserOrderInfo(
  //   orderId ?? ""
  // );

  const [showInfo, setShowInfo] = useState("orderInfo");

  const [idList, setIdList] = useState<string[] | []>([]);

  const handleShowInfo = (id: string) => {
    setShowInfo(id);
  };

  const data = {
    imomOrderId: "아이맘주문아이디",
    orderDate: "2024-02-28 14:06:18",
    reserveUser: "김우리",
    packageName: "공개 패키지",
    productCode: "1번상품",
    startDate: "2024-10-11 11:11:11",
    endDate: "2024-10-20 11:11:11",
    adultCount: 1,
    childCount: 2,
    infantCount: 0,
    totalCount: 3,
    totalPrice: 111221,
    payedPrice: 12340,
    balance: 111116,
    orderNumberList: [],
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
        birth: "2020-11-11",
        phoneNumber: null,
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
    ],
  };

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     setIdList(data.orderNumberList);
  //   }
  // }, [data]);

  const handlePayment = () => {
    navigate("/paymentcheckout", {
      state: {
        orderId: "",
        amount: data.balance,
        paymentKey: "",
        imomOrderId: data.imomOrderId,
      },
    });
  };

  return (
    <div className="flex flex-col gap-10 w-full mr-20 mb-50 mt-[60px]">
      <CategoryBtns
        category={ORDER_DETAIL_CATEGORIES}
        handleClick={handleShowInfo}
        active={showInfo}
        divStyle="!justify-start gap-[40px] w-full"
      />
      <OrderedAmount
        totalPrice={data?.totalPrice}
        payedPrice={data?.payedPrice}
        balance={data?.balance}
        role={"user"}
        handlePayment={handlePayment}
      />
      {showInfo === "orderInfo" && data ? (
        <OrderInfo data={data} role={"user"} />
      ) : (
        <PaymentInfo idList={data.orderNumberList} />
      )}

      <div className="h-[60px]" />
    </div>
  );
};

export default OrderConfirm;
