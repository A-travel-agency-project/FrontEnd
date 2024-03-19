import React, { useEffect, useState } from "react";
import ManagerTitle from "../components/Manager/ManagerTitle";
import OrderTable from "../components/MyPage/OrderTable";
import { baseInstance } from "../api/instance";
import { useParams } from "react-router-dom";

const OrderConfirm = () => {
  const { orderId } = useParams();
  const [orderConfirm, setOrderConfirm] = useState([]);
  console.log(orderConfirm);
  useEffect(() => {
    if (orderId) {
      baseInstance
        .get(`/orders/myinfo/${orderId}`)
        .then((res) => setOrderConfirm(res.data.data));
    }
  }, []);
  const orderHeader = [
    "주문번호",
    "주문일시",
    "예약자명",
    "패키지이름",
    "상품번호",
    "출발일시",
    "도착일시",
    "총인원",
  ];
  const orderInfo = ["예약자명/성별", "나이/법정 생년월일", "휴대폰 번호"];
  const orderInfoContent = ["이주형", "만 나이___세", "010-9745-4197"];
  const orderContent = [
    "내용1",
    "내용2",
    "내용3",
    "내용4",
    "내용5",
    "내용6",
    "내용7",
    "내용8",
  ];

  return (
    <div className="w-full">
      <div>
        <ManagerTitle title="주문 확인" />
        {orderHeader.map((el, idx) => (
          <OrderTable title={el} content={orderContent[idx]} />
        ))}
      </div>
      <div>
        <ManagerTitle title="결제 확인" />
        <OrderTable title="예약금액/잔금" content="123,456원" />
      </div>
      <div>
        <ManagerTitle title="여행자 정보" />
        {orderInfo.map((el, idx) => (
          <OrderTable title={el} content={orderInfoContent[idx]} />
        ))}
      </div>
    </div>
  );
};

export default OrderConfirm;
