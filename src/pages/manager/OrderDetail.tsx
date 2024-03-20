import { useParams } from "react-router-dom";
import useGetOrderDetail from "../../queries/orders/useGetOrderDetail";
import CategoryBtns from "../../components/TravelDetail/CategoryBtns";
import { ORDER_DETAIL_CATEGORIES } from "../../constants/managerdata";
import { useEffect, useState } from "react";
import OrderInfo from "../../components/Manager/orderDetail/OrderInfo";
import PaymentInfo from "../../components/Manager/orderDetail/PaymentInfo";
import useGetOrderCancel from "../../queries/orders/useGetOrderCancel";
import { useQueryClient } from "@tanstack/react-query";
import OrderedAmount from "../../components/common/Order/OrderedAmount";

const OrderDetail = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { data, isError, error } = useGetOrderDetail(id ?? "");

  const [isCancel, setIsCancel] = useState(false);

  const {
    data: cancelData,
    isError: cancelIsError,
    error: cancelError,
  } = useGetOrderCancel(data?.imomOrderId ?? "", isCancel);

  const [showInfo, setShowInfo] = useState("orderInfo");

  const [idList, setIdList] = useState<string[] | []>([]);

  const handleShowInfo = (id: string) => {
    setShowInfo(id);
  };

  const handleOrderCancel = () => {
    const check = confirm(
      `여행자 ${data?.reserveUser}님의 주문을 취소하시겠습니까?`
    );
    if (check) {
      setIsCancel(true);
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      setIdList(data.orderNumberList);
    }
  }, [data]);

  useEffect(() => {
    if (cancelError && cancelError) {
      alert("주문취소에 실패하였습니다.");
    }
    if (cancelData) {
      setIsCancel(false);
      alert("주문이 취소되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["getOrderDetail"] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancelError, cancelIsError, cancelData]);

  if (isError) console.log(error?.message);
  return (
    <div className="flex flex-col gap-10 w-full mr-20 mb-50 mt-[60px]">
      <CategoryBtns
        category={ORDER_DETAIL_CATEGORIES}
        handleClick={handleShowInfo}
        active={showInfo}
        divStyle="!justify-start gap-[40px] w-full"
      />
      <OrderedAmount
        totalPrice={data?.totalPrice}
        payedPrice={data?.payedPrice}
        balance={data?.balance}
      />
      {showInfo === "orderInfo" && data ? (
        <OrderInfo data={data} handleCancel={handleOrderCancel} />
      ) : (
        <PaymentInfo idList={idList} />
      )}

      <div className="h-[60px]" />
    </div>
  );
};

export default OrderDetail;
