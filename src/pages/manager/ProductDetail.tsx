import React from "react";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import ProductTitle from "../../components/Manager/ProductTitle";
import ProductIcon from "../../components/Manager/ProductIcon";
import { porductIcons, productCost } from "../../constants/data";
import ProductCost from "./ProductCost";

const ProductDetail = () => {
  return (
    <div className="w-full">
      <ManagerTitle title="상품 등록/수정" />
      <div className="border mb-6">
        {/* 상품관리 */}
        <div className="flex w-full">
          <ProductTitle title="상품코드" className="" />
          <input className="w-full" />
        </div>

        <div className="flex w-full">
          <ProductTitle title="패키지선택" className="" />

          <select className="w-full">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="flex w-full">
          <ProductTitle title="상품아이콘" className="" />

          <div className="flex flex-col w-full">
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
          <ProductTitle title="상품 상태" className="" />
          <div className="w-full flex">
            {["출발확정", "투어확정", "예약가능", "예약마감"].map(
              (el, index) => {
                return (
                  <div className="flex">
                    <input type="radio" name="check" value={el} />
                    {el}
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="flex w-full">
          <ProductTitle title="공개 상태" className="" />
          <div className="flex w-full">
            {["공개", "비공개"].map((el, index) => {
              return (
                <div className="flex w-full">
                  <input type="radio" name="check" value={el} />
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 출발 도착 */}
      <div className="border mb-6">
        {/* 출발일시 도착일시 컴포넌트로 빼기 */}
        <div>
          <ProductTitle title="출발일시" className="" />
          <ProductTitle title="도착일시" className="" />
        </div>
        <div className="flex">
          <ProductTitle title="항공사" className="" />

          <input />
        </div>
        <div className="flex">
          <ProductTitle title="최소출발인원" className="" />

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
      <div className="border mb-6 flex w-full">
        <ProductTitle title="여행비용" className="" />
        <div className="w-full">
          {productCost.map((el, index) => {
            return (
              <ProductCost key={index} title1={el.title1} title2={el.title2} />
            );
          })}
        </div>
      </div>
      {/* 상품핵심포인트 */}
      <div className="border flex mb-6">
        <ProductTitle title="상품핵심포인트" className="" />

        <input />
      </div>
      {/* 여행 포함/불포함 */}
      <div className="border flex mb-6">
        <ProductTitle title="여행 포함/불포함" className="" />

        <div className="flex flex-col">
          <div className="flex">
            <div className="border-r border-black">포함내역</div>
            <input />
          </div>
          <div className="flex">
            <div className="border-r border-black">불포함내역</div>
            <input />
          </div>
        </div>
      </div>

      {/* 예약 유의사항 */}
      <div className="border">
        <div className="flex">
          <ProductTitle title="예약 유의사항" className="" />

          <input />
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
