import React, { useState } from "react";
import { productHeaders, productItems } from "../../constants/data";
// import Pagination from "../../components/common/Pagination";
import CustomDatePicker from "../../components/common/CustomDatePicker";
import { useNavigate } from "react-router-dom";

interface ProductItem {
  key: number;
  productName: string;
  productCode: string;
  departure: string;
  dateOfarraivel: string;
  minimumPeople: number | null;
  reservationPerson: number | null;
  maximumPeople: number | null;
  productStatus: string;
  openStatus: string;
}

const ProductManager = () => {
  const navagation = useNavigate();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleToggleAll = () => {
    if (selectedItems.length === productItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(productItems.map((item) => item.key));
    }
  };

  const handleToggleItem = (key: number): void => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter((id) => id !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  const emptyData = Array.from({ length: 10 - productItems.length }).map(
    (_, index) => ({
      key: productItems.length + index + 1,
      productName: "",
      productCode: "",
      departure: "",
      dateOfarraivel: "",
      minimumPeople: null,
      reservationPerson: null,
      maximumPeople: null,
      productStatus: "",
      openStatus: "",
    })
  );

  const productData: ProductItem[] = [...productItems, ...emptyData];
  return (
    <div className="w-full">
      <h2>상품목록</h2>
      <div>
        <div className="flex  border-y w-full border-black h-10 items-center ">
          <div className="h-full w-40 flex justify-center items-center bg-gray-300">
            패키지 이름
          </div>
          <select className="ml-5 border w-80 outline-none h-full">
            <option>이름</option>
          </select>
        </div>
        <div className="flex  border-b w-full border-black h-10 items-center">
          <div className="h-full flex w-40 justify-center items-center bg-gray-300">
            상품 상태
          </div>
          <select className=" ml-5 border w-80 outline-none h-full">
            <option>이름</option>
          </select>
        </div>
      </div>

      <div className="h-20 w-full flex items-center border-y border-black">
        <div className="w-40 bg-gray-200 flex justify-center items-center border-r border-black h-full">
          출시 일시
        </div>
        <div className="w-full">
          <div className="border-b w-full flex items-center py-3">
            {["하루", "일주일", "1달이내"].map((el, index) => {
              return (
                <button className="border border-black px-5 ml-5" key={index}>
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
      <div className="flex w-full justify-center items-center">
        <button className="w-20 border mt-2 mb-5">
          <span>검색하기</span>
        </button>
      </div>

      <>
        <table className="table-auto w-full border-collapse border border-black">
          <thead className="bg-[rgba(0,0,0,0.1)] h-[45px] 2sm:h-[50px]">
            <tr>
              <th className="p-2 ">
                <input
                  type="checkbox"
                  onChange={handleToggleAll}
                  checked={selectedItems.length === productItems.length}
                />
              </th>
              {productHeaders.map((el, index) => (
                <th key={index} className="p-2 border border-black">
                  {el.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productData.map((el) => (
              <tr
                className="h-[45px] text-center whitespace-nowrap"
                key={el.key}
              >
                <td className="border-black border">
                  <input
                    type="checkbox"
                    onChange={() => handleToggleItem(el.key)}
                    checked={selectedItems.includes(el.key)}
                  />
                </td>
                <td className="border  border-black p-2">{el.productName}</td>
                <td className="border border-black p-2">{el.productCode}</td>
                <td className="border border-black p-2">{el.dateOfarraivel}</td>
                <td className="border border-black p-2">{el.departure}</td>
                <td className="border border-black p-2">{el.minimumPeople}</td>
                <td className="border border-black p-2">
                  {el.reservationPerson}
                </td>
                <td className="border border-black p-2">{el.maximumPeople}</td>
                <td className="border border-black p-2">{el.productStatus}</td>
                <td className="border border-black p-2">{el.openStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Pagination /> */}
        <div>
          <button
            onClick={() => {
              navagation("/productdetail");
            }}
          >
            신규등록
          </button>
          <button>복사</button>
          <button>삭제</button>
        </div>
      </>
    </div>
  );
};

export default ProductManager;
