const OrderMangerBtns = ({
  handleOrderState,
}: {
  handleOrderState: (state: string) => void;
}) => {
  return (
    <div className="h-20 w-full flex items-center border-b border-black">
      <div className="w-40 bg-gray-200 flex justify-center items-center border-r border-black h-full">
        결제 상태
      </div>
      <div className="flex item items-center gap-5">
        <div className=" w-full flex items-center">
          {["전체", "예약금 완료", "잔금완료", "취소", "환불필요"].map((el) => {
            return (
              <button
                // className={` px-5 ml-5 ${
                //   orderReq.orderState === el ||
                //   (!orderReq.orderState && el === "전체")
                //     ? "bg-main-color text-white"
                //     : "border border-sub-black"
                // }`}
                key={el}
                onClick={() => handleOrderState(el)}
              >
                {el}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OrderMangerBtns;
