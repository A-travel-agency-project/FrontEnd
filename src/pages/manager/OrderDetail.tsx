import { useParams } from "react-router-dom";
import useGetOrderDetail from "../../queries/orders/useGetOrderDetail";
import CategoryBtns from "../../components/TravelDetail/CategoryBtns";
import { ORDER_DETAIL_CATEGORIES } from "../../constants/managerdata";
import { useEffect, useState } from "react";
import OrderInfo from "../../components/Manager/orderDetail/OrderInfo";
import PaymentInfo from "../../components/Manager/orderDetail/PaymentInfo";

const OrderDetail = () => {
  const { id } = useParams();

  const { data, isError, error } = useGetOrderDetail(id ?? "");

  const [showInfo, setShowInfo] = useState("orderInfo");

  const [idList, setIdList] = useState<string[] | []>([]);

  const handleShowInfo = (id: string) => {
    setShowInfo(id);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      setIdList(data.orderNumberList);
    }
  }, [data]);

  if (isError) console.log(error?.message);
  return (
    <div className="flex flex-col gap-10 w-full mr-20 mb-50 mt-[60px]">
      <CategoryBtns
        category={ORDER_DETAIL_CATEGORIES}
        handleClick={handleShowInfo}
        active={showInfo}
        divStyle="!justify-start gap-[40px] w-full"
      />
      {showInfo === "orderInfo" && data ? (
        <OrderInfo data={data} />
      ) : (
        <PaymentInfo idList={idList} />
      )}

      <div className="h-[60px]" />
    </div>
  );
};

export default OrderDetail;
