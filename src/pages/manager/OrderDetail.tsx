import { useEffect } from "react";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import VerticalTable from "../../components/Manager/VerticalTable";
import axios from "axios";

const OrderDetail = () => {
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
        birth: null,
        phoneNumber: "010-2222-2222",
        isRepresentative: true,
      },
      {
        travelerName: "여행자2",
        enFirstName: "Kim",
        enLastName: "Minaaa",
        gender: "여",
        birth: null,
        phoneNumber: null,
        isRepresentative: false,
      },
      {
        travelerName: "여행자3",
        enFirstName: "Kim",
        enLastName: "Minaaaaa",
        gender: "여",
        birth: null,
        phoneNumber: "010-2010-3333",
        isRepresentative: false,
      },
    ],
  };
  useEffect(() => {
    axios
      .get(
        "https://api.tosspayments.com/v1/payments/orders/IMOM_PI1_DT1709804457218",
        {
          headers: {
            Authorization: `Basic ${btoa(
              "test_sk_Gv6LjeKD8aEOjvM4vgye8wYxAdXy:"
            )}`,
          },
        }
      )
      .then((res) => console.log(res));
  });

  console.log(btoa("test_sk_Gv6LjeKD8aEOjvM4vgye8wYxAdXy:"));

  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <ManagerTitle title="주문확인" />
      </div>
      <div>
        <ManagerTitle title="예약자정보" />
      </div>
      <div>
        <ManagerTitle title="결제확인" />
      </div>
      <div className="">
        <ManagerTitle title="여행자정보" />
        {/* {data.userResponseDto.map((data) => (
          <VerticalTable headers={travelerDataHeader} data={data} />
        ))} */}
      </div>
    </div>
  );
};

export default OrderDetail;
