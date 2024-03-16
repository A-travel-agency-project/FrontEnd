import React from "react";
import ManagerTitle from "../components/Manager/ManagerTitle";

const MyPageOrderInfo = () => {
  const data = [
    {
      order: 1,
      orderDate: "2000.01.02",
      packageName: "패키지이름",
      startDate: "2000.01.02",
      personnel: 10,
      productState: "예약가능",
      payment: "결제완료",
    },
    {
      order: 1,
      orderDate: "2000.01.02",
      packageName: "패키지이름",
      startDate: "2000.01.02",
      personnel: 10,
      productState: "예약가능",
      payment: "결제완료",
    },
    {
      order: 1,
      orderDate: "2000.01.02",
      packageName: "패키지이름",
      startDate: "2000.01.02",
      personnel: 10,
      productState: "예약가능",
      payment: "결제완료",
    },
    {
      order: 1,
      orderDate: "2000.01.02",
      packageName: "패키지이름",
      startDate: "2000.01.02",
      personnel: 10,
      productState: "예약가능",
      payment: "결제완료",
    },
  ];
  const orderHeaders = [
    {
      key: 1,
      text: "주문번호",
      value: "order",
    },
    {
      key: 2,
      text: "주문일자",
      value: "orderDate",
    },
    {
      key: 3,
      text: "패키지이름",
      value: "packageName",
    },
    {
      key: 4,

      text: "출발일시",
      value: "startDate",
    },
    {
      key: 5,

      text: "예약인원",
      value: "personal",
    },
    {
      key: 6,

      text: "상품상태",
      value: "productState",
    },
    {
      key: 7,

      text: "결제상태",
      value: "payment",
    },
  ];
  return (
    <div className="w-full">
      <div className="mb-10">
        <ManagerTitle title="마이 우리엘" />
        <div className="text-xl ">서윤이와 여행까지 앞으로 37일 남았어요!</div>
      </div>
      <table className="table-auto w-full border-collapse border border-black mb-3">
        <thead className="bg-title-box h-[45px] 2sm:h-[50px]">
          <tr>
            <th className="p-2 ">
              <input type="checkbox" />
            </th>
            {orderHeaders.map((el, index) => (
              <th key={index} className="p-2 border border-black">
                {el.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((el, idx) => (
            <tr className=" h-[45px] 2sm:h-[50px] text-center" key={idx}>
              <td className="border-black border">
                <input type="checkbox" />
              </td>

              <td className="border border-black p-2">{el.order}</td>
              <td className="border border-black p-2">{el.orderDate}</td>
              <td className="border border-black p-2">{el.packageName}</td>
              <td className="border border-black p-2">{el.startDate}</td>
              <td className="border border-black p-2">{el.personnel}</td>
              <td className="border border-black p-2">{el.productState}</td>
              <td className="border border-black p-2">{el.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPageOrderInfo;
