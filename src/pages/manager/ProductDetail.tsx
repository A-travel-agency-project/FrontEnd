import React from "react";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import ProductTitle from "../../components/Manager/ProductTitle";

const ProductDetail = () => {
  return (
    <div className="w-full">
      <ManagerTitle title="상품 등록/수정" />
      <div className="border">
        {/* 상품관리 */}
        <div className="flex w-full">
          <ProductTitle title="상품코드" className="" />
          <input />
        </div>

        <div className="flex w-full">
          <ProductTitle title="패키지선택" className="" />

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="flex">
          <ProductTitle title="상품아이콘" className="" />

          <div className="flex flex-col">
            <div>비행기 국적</div>
            <div>인솔자 동행</div>
            <div>쇼핑 유무</div>
            <div>선택 관광 유무</div>
          </div>
        </div>
        <div className="flex">
          <ProductTitle title="상품 상태" className="" />

          {["출발확정", "투어확정", "예약가능", "예약마감"].map((el, index) => {
            return (
              <div className="flex" key={index}>
                <input type="radio" value={el} name={el} />
                <span>{el}</span>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <ProductTitle title="공개 상태" className="" />
          <input type="radio" />
          <span>공개</span>
          <input type="radio" />
          <span>비공개</span>
        </div>
      </div>
      {/* 출발 도착 */}
      <div className="border">
        {/* 출발일시 도착일시 컴포넌트로 빼기 */}
        <div>
          <ProductTitle title="출발일시" className="" />
          <ProductTitle title="도착일시" className="" />

          <select></select>
        </div>
        <div className="flex">
          <ProductTitle title="항공사" className="" />

          <input />
        </div>
        <div className="flex">
          <ProductTitle title="최소출발인원" className="" />

          <select>
            {new Array(15).fill(null).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* 여행 비용 */}
      <div className="border">
        <ProductTitle title="여행비용" className="" />
      </div>
      {/* 상품핵심포인트 */}
      <div className="border">
        <ProductTitle title="상품핵심포인트" className="" />

        <input />
      </div>
      {/* 여행 포함/불포함 */}
      <div className="border flex">
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
      <div className="h-[1px] w-full bg-black" />
      <button>
        <span>등록하기</span>
      </button>
    </div>
  );
};

export default ProductDetail;
