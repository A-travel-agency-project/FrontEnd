import Pagination from "../../components/common/Pagination";
import { useNavigate } from "react-router-dom";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import { ChangeEvent, useState } from "react";
import CustomDatePicker from "../../components/common/CustomDatePicker";

const OrderManager = () => {
  const navagation = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => e.target.value);
  };

  const itemList = [
    {
      order_id: 1, //주문번호
      product_id: 2,
      user_name: "김우리",
      package_name: "패키지 이름",
      created_date: "2023-02-02", //주문일자
      start_date: "2023-05-05",
      phone_number: "010-1234-5678", //사용자 폰번호
      email: "uriel@naver.com",
      total_count: 4, //총인원
      deposit: "123000", //예약금
      difference: "900000",
    },
    {
      order_id: 2, //주문번호
      product_id: 3,
      user_name: "김리우",
      package_name: "패키지 이름",
      created_date: "2023-02-02", //주문일자
      start_date: "2023-05-05",
      phone_number: "010-1234-5678", //사용자 폰번호
      email: "uriel@naver.com",
      total_count: 4, //총인원
      deposit: "123000", //예약금
      difference: "900000",
    },
  ];

  const orderManagerHeader = [
    "주문번호",
    "상품번호",
    "예약자명",
    "주문일시",
    "패키지이름",
    "출발일",
    "핸드폰",
    "이메일",
    "총인원(어른/아동/유아)",
    "예약금금액",
    "남은결제금액",
  ];

  const searchOption = {
    order_id: "주문번호",
    product_id: "상품번호",
    user_name: "예약자명",
    phone_number: "핸드폰",
    email: "이메일",
  };

  const emptyData = Array.from({ length: 10 - itemList.length }).map(
    (_, index) => ({
      order_id: itemList.length + index + 1,
      product_id: 0,
      user_name: "",
      package_name: "",
      created_date: "", //주문일자
      start_date: "",
      phone_number: "", //사용자 폰번호
      email: "",
      total_count: 0, //총인원
      deposit: "", //예약금
      difference: "",
    })
  );

  const displayData = [...itemList, ...emptyData];

  return (
    <div className="w-full">
      <ManagerTitle title="주문 목록" />
      <div className="h-20 w-full flex items-center border-y border-black">
        <div className="w-40 bg-gray-200 flex justify-center items-center border-r border-black h-full">
          출시 일시
        </div>
        <div className="w-full">
          <div className="border-b w-full flex items-center py-3">
            {["하루", "일주일", "1달이내"].map((el) => {
              return (
                <button className="border border-black px-5 ml-5" key={el}>
                  {el}
                </button>
              );
            })}
          </div>
          <div className="flex">
            <CustomDatePicker className="mx-5" />
            <span>~</span>
            <CustomDatePicker className="ml-5" />
          </div>
        </div>
      </div>

      <>
        <table className="table-auto w-full border-collapse border border-black">
          <thead className="bg-[rgba(0,0,0,0.1)] h-[45px] 2sm:h-[50px]">
            <tr>
              {orderManagerHeader.map((el) => (
                <th key={el} className="p-2 border border-black">
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((el) => (
              <tr
                className="h-[45px] text-center whitespace-nowrap cursor-pointer"
                key={el.order_id}
                onClick={() => {
                  navagation("/orderdetail");
                }}
              >
                <td className="border  border-black p-2">
                  {el.product_id ? el.order_id : ""}
                </td>
                <td className="border  border-black p-2">
                  {el.product_id ? el.product_id : ""}
                </td>
                <td className="border border-black p-2">{el.user_name}</td>
                <td className="border border-black p-2">{el.package_name}</td>
                <td className="border border-black p-2">{el.created_date}</td>
                <td className="border border-black p-2">{el.start_date}</td>
                <td className="border border-black p-2">{el.phone_number}</td>
                <td className="border border-black p-2">{el.email}</td>
                <td className="border border-black p-2">
                  {el.total_count ? el.total_count : ""}
                </td>
                <td className="border border-black p-2">{el.deposit}</td>
                <td className="border border-black p-2">{el.difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-[20px]">
          <Pagination items={10} count={10} />
        </div>
        <div className="flex gap-[20px] h-[28px] mt-[20px]">
          <select defaultValue="default">
            {Object.entries(searchOption).map(([key, value]) => {
              return (
                <option id={key} key={key}>
                  {value}
                </option>
              );
            })}
          </select>
          <input
            className="border-[1px] border-sub-black"
            onChange={handleSearch}
            type="text"
            value={searchValue}
          />
          <button>검색</button>
        </div>
      </>
    </div>
  );
};

export default OrderManager;
