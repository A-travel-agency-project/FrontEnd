import ManagerTitle from "../../components/Manager/ManagerTitle";
import VerticalTable from "../../components/Manager/VerticalTable";

const OrderDetail = () => {
  const data = {
    order_id: 1, //주문번호
    created_date: "2023-02-02", //주문일자
    user_name: "예약자",
    package_name: "영국 여행",
    product_id: "2",
    start_date: "2023-05-05",
    end_date: "2023-05-10",
    total_count: 4,
    deposit: 123000,
    difference: 9900000, //차액
    userResponseDto: [
      {
        user_name: "user1",
        user_sex: "여",
        birth: "2001-01-02",
        phone_number: "010-1234-1234",
      },
      {
        user_name: "user2",
        user_sex: "여",
        birth: "2001-01-02",
        phone_number: "010-1234-1234",
      },
    ],
  };

  type OrderDataHeader = {
    order_id: string;
    created_date: string;
    user_name: string;
    package_name: string;
    product_id: string;
    start_date: string;
    end_date: string;
    total_count: string;
  };

  const orderDataHeader: OrderDataHeader = {
    order_id: "주문번호",
    created_date: "주문일시",
    user_name: "예약자 정보",
    package_name: "패키지이름",
    product_id: "상품번호",
    start_date: "출발일시",
    end_date: "도착일시",
    total_count: "총인원",
  };

  const userDataHeader = {
    user_name: "예약자 이름",
    user_birth: "생년월일",
    user_sex: "성별",
    phone_number: "휴대폰",
    email: "이메일",
  };

  const travelerDataHeader = {
    user_name: "예약자명",
    user_sex: "성별",
    birth: "나이/법정 생년월일",
    phone_number: "휴대폰 번호",
  };

  const paymentDataHeader = {
    deposit: "예약금액/잔금",
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <ManagerTitle title="주문확인" />
        <VerticalTable headers={orderDataHeader} data={data} />
      </div>
      <div>
        <ManagerTitle title="예약자정보" />
        <VerticalTable headers={userDataHeader} data={data} />
      </div>
      <div>
        <ManagerTitle title="결제확인" />
        <VerticalTable headers={paymentDataHeader} data={data} />
      </div>
      <div className="">
        <ManagerTitle title="여행자정보" />
        {data.userResponseDto.map((data) => (
          <VerticalTable headers={travelerDataHeader} data={data} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
