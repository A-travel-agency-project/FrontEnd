import React from "react";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import ProductTitle from "../../components/Manager/ProductTitle";
import ProductIcon from "../../components/Manager/ProductIcon";
import { porductIcons, productCost } from "../../constants/data";
import ProductCost from "./ProductCost";
import ProductDate from "../../components/Manager/ProductDate";

const ProductDetail = () => {
  return (
    <div className="w-full ">
      <ManagerTitle title="상품 등록/수정" />
      <div className="border-y mb-6 border-black">
        {/* 상품관리 */}
        <div className="flex w-full border-b border-black">
          <ProductTitle title="상품코드" className="border-r border-black" />
          <input className="w-full outline-none" />
        </div>

        <div className="flex w-full">
          <ProductTitle
            title="패키지선택"
            className="border-r border-b border-black"
          />
          <div className="w-full border-b border-black">
            <select className="w-80 border">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className="flex w-full">
          <ProductTitle
            title="상품아이콘"
            className="border-r border-b border-black"
          />

          <div className="flex flex-col w-full border-b border-black">
            {porductIcons.map((el, index) => {
              return (
                <ProductIcon
                  key={index}
                  title={el.title}
                  firstLabel={el.labelFirst}
                  secondLabel={el.labelSecond}
                />
              );
            })}
          </div>
        </div>
        <div className="flex w-full">
          <ProductTitle
            title="상품 상태"
            className="border-r border-b border-black"
          />
          <div className="w-full flex border-b border-black">
            {["출발확정", "투어확정", "예약가능", "예약마감"].map(
              (el, index) => {
                return (
                  <div className="flex items-center w-40 ml-5" key={index}>
                    <input type="radio" name="check" value={el} />
                    <span>{el}</span>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="flex w-full">
          <ProductTitle title="공개 상태" className="border-r border-black" />
          <div className="flex w-full">
            {["공개", "비공개"].map((el, index) => {
              return (
                <div className="flex w-20 ml-5" key={index}>
                  <input type="radio" name="check" value={el} />
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 출발 도착 */}
      <div className="border-y mb-6 border-black">
        {/* 출발일시 도착일시 컴포넌트로 빼기 */}
        <div>
          <div className="flex border-b border-black">
            <ProductTitle title="출발일시" className="border-r  border-black" />
            <ProductDate />
          </div>
          <div className="flex border-b border-black">
            <ProductTitle title="도착일시" className="border-r  border-black" />
            <ProductDate />
          </div>
        </div>
        <div className="flex border-b border-black">
          <ProductTitle title="항공사" className="border-r border-black" />

          <input className="border w-80 outline-none" />
        </div>
        <div className="flex">
          <ProductTitle
            title="최소출발인원"
            className="border-r border-black"
          />

          <select>
            {new Array(15).fill(null).map((_, index) => (
              <>
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              </>
            ))}
          </select>
          <span>명</span>
        </div>
      </div>
      {/* 여행 비용 */}
      <div className="border-t mb-6 flex w-full border-black">
        <ProductTitle
          title="여행비용"
          className="border-b border-r border-black"
        />
        <div className="w-full ">
          {productCost.map((el, index) => {
            return (
              <ProductCost key={index} title1={el.title1} title2={el.title2} />
            );
          })}
        </div>
      </div>
      {/* 상품핵심포인트 */}
      <div className="border-y flex mb-6 h-36 border-black">
        <ProductTitle
          title="상품핵심포인트"
          className="border-r border-black"
        />

        <textarea className="w-full outline-none resize-none" />
      </div>
      {/* 여행 포함/불포함 */}
      <div className="border-t border-black flex mb-6 h-36">
        <ProductTitle
          title="여행 포함/불포함"
          className="border-r border-b border-black"
        />

        <div className="flex h-full w-full">
          <div className="flex flex-col h-full w-full">
            {["포함내역", "불포함내역"].map((el, index) => {
              return (
                <div
                  className="flex w-full h-full border-b border-black"
                  key={index}
                >
                  <div className="flex justify-center items-center w-40 border h-full whitespace-nowrap">
                    {el}
                  </div>
                  <input className="w-full outline-none border" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 예약 유의사항 */}
      <div className="border-y border-black h-36 w-full">
        <div className="flex h-full w-full">
          <ProductTitle
            title="예약 유의사항"
            className="border-r border-black"
          />

          <textarea className="w-full resize-none outline-none" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-black my-8" />
      <div className="flex  justify-center items-center">
        <button className="border border-black bg-title-box px-6">
          <span>등록하기</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
