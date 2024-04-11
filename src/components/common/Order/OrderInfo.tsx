import { useEffect, useState } from "react";
import {
  COUNT_CATEGORIES,
  ORDER_INFO_CATEGORIES,
} from "../../../constants/managerdata";
import { OrderInfoData, TravelerInfoData } from "../../../types/manager";
import ManagerTitle from "../../Manager/ManagerTitle";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TravelerCountBox from "./TravelerCountBox";
import OrderedTravelerInfo from "./OrderedTravelerInfo";
import { orderDateFormat } from "../../../utils/orderDateFormat";
import OrderDetailBtn from "./OrderDetailBtn";
import SpecialAmount from "./SpecialAmount";
import usePostTravelerInfo from "../../../queries/orders/usePostTravelerInfo";
import useGetOrderCancel from "../../../queries/orders/useGetOrderCancel";
import { useRecoilValue } from "recoil";
import { viewSize } from "../../../atom/atom";
import SectionTitle from "../SectionTitle";

const OrderInfo = ({ data, role }: { data: OrderInfoData; role: string }) => {
  const viewSizeState = useRecoilValue(viewSize);
  const [travelerInfoList, setTravelerInfoList] = useState<TravelerInfoData[]>(
    data.travelerInfos
  );

  const [travelerCount, setTravelerCount] = useState({
    imomOrderId: "",
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
  });

  const { mutate, isError, error, errorReason } = usePostTravelerInfo({
    ...travelerCount,
    totalCount:
      travelerCount.adultCount +
      travelerCount.childCount +
      travelerCount.infantCount,
    travelerInfoList: travelerInfoList,
  });

  const [editableInfo, setEditableInfo] = useState<number | null>(null);

  const { mutate: cancelMutate } = useGetOrderCancel(data.imomOrderId);

  const handleEditableInfo = (id: number | null) => {
    setEditableInfo(id);
  };

  const handleDeleteTraveler = (id: number, name: string, role: string) => {
    const check = confirm(`${name}님의 정보를 삭제하시겠습니까?`);
    if (check) {
      const category = COUNT_CATEGORIES[role as keyof typeof COUNT_CATEGORIES];
      // 인원 변경
      setTravelerCount((prev) => ({
        ...prev,
        [category]: +prev[category as keyof typeof travelerCount] - 1,
      }));
      // 리스트에서 정보 제거
      setTravelerInfoList((prev) => prev.filter((_, index) => index !== id));
      mutate();
    } else {
      return;
    }
  };

  const handleAddTraveler = () => {
    setTravelerInfoList((prev) => [
      ...prev,
      {
        travelerName: "",
        enFirstName: "",
        enLastName: "",
        gender: "남",
        birth: "",
        phoneNumber: null,
        representative: false,
      },
    ]);
  };

  const handleEditTraveler = (
    id: number,
    info: TravelerInfoData,
    changedRole?: string, // 변경될 인원 카테고리
    orderedRole?: string // 유저가 주문한 인원 카테고리
  ) => {
    if (changedRole && orderedRole && changedRole !== orderedRole) {
      // 추가될 인원 카테고리
      const plusCategory = changedRole + "Count";

      // 제거될 인원 카테고리
      const minusCategory = orderedRole + "Count";
      // 인원 변경
      setTravelerCount((prev) => ({
        ...prev,
        [plusCategory]: +prev[plusCategory as keyof typeof travelerCount] + 1,
        [minusCategory]: +prev[minusCategory as keyof typeof travelerCount] - 1,
      }));
    } else if (changedRole && !orderedRole) {
      // 추가될 인원 카테고리
      const plusCategory = changedRole + "Count";

      // 인원 변경
      setTravelerCount((prev) => ({
        ...prev,
        [plusCategory]: +prev[plusCategory as keyof typeof travelerCount] + 1,
      }));
    }
    setTravelerInfoList((prev) => {
      const newList = [...prev];
      newList[id] = info;
      return newList;
    });
    mutate();
  };

  const handleOrderCancel = () => {
    const check = confirm(
      `여행자 ${data?.reserveUser}님의 주문을 취소하시겠습니까?`
    );
    if (check) {
      cancelMutate();
    }
  };

  useEffect(() => {
    if (isError && error && errorReason) {
      alert(
        errorReason !== null
          ? `${errorReason}`
          : "여행자 정보 수정에 실패하였습니다."
      );
      setTravelerInfoList(data.travelerInfos);
    }
  }, [isError, error, errorReason, data]);

  useEffect(() => {
    setTravelerInfoList(data.travelerInfos);
    setTravelerCount({
      imomOrderId: data.imomOrderId,
      adultCount: data.adultCount,
      childCount: data.childCount,
      infantCount: data.infantCount,
    });
    console.log(data);
  }, [data]);

  return (
    <div
      className="text-sub-black flex flex-col gap-[32px] text-[14px] 
    max-xsm:w-full max-xsm:gap-[20px] max-xsm:!px-[16px]"
    >
      {role === "admin" && (
        <div>
          <SpecialAmount
            orderId={data.imomOrderId}
            orderState={data.orderState ?? ""}
            totalPrice={data.totalPrice}
          />
        </div>
      )}
      <div>
        {viewSizeState === "web" && (
          <ManagerTitle title="주문확인" style="mb-[12px]" />
        )}
        <div
          className="flex justify-between flex-col border-y-[2px] border-sub-black min-w-fit 
        max-xsm:w-full max-xsm:border-y-[0.5px] max-xsm:border-main-color"
        >
          {ORDER_INFO_CATEGORIES.map((item) =>
            item.category === "총인원" ? (
              <div className="flex " key={item.category}>
                <TableHeader
                  header={viewSizeState === "web"}
                  category={`총인원`}
                />
                <div className="flex max-xsm:flex-col max-xsm:w-full">
                  <div className="flex max-xsm:border-b-[0.5px] max-xsm:border-main-color max-xsm:w-full">
                    <TravelerCountBox
                      role={"총"}
                      count={data.totalCount}
                      style="bg-[#F5F5F4]"
                    />
                    <TravelerCountBox role={"성인"} count={data.adultCount} />
                  </div>
                  <div className="flex max-xsm:w-full">
                    <TravelerCountBox role={"아동"} count={data.childCount} />
                    <TravelerCountBox role={"유아"} count={data.infantCount} />
                  </div>
                </div>
              </div>
            ) : item.category === "여행대표자" &&
              Array.isArray(data.travelerInfos) ? (
              <div
                className="flex border-b border-sub-black min-w-fit 
                max-xsm:border-b-[0.5px] max-xsm:border-main-color"
                key={item.category}
              >
                <TableHeader
                  header={viewSizeState === "web"}
                  category={item.category}
                  cellStyle="h-auto"
                />
                <OrderedTravelerInfo
                  data={
                    travelerInfoList.filter(
                      (item) => item.representative === true
                    )[0]
                  }
                  representative={true}
                  role={role}
                />
              </div>
            ) : item.category === "주문상태" && "orderState" in data ? (
              <div
                key={item.category}
                className={`flex w-full items-center border-b border-sub-black
                max-xsm:border-b-[0.5px] max-xsm:border-main-color`}
              >
                <TableHeader
                  category={"주문상태"}
                  header={viewSizeState === "web"}
                />
                <div className="px-[24px] flex shrink-0">{data.orderState}</div>
                {data.orderState !== "취소" && (
                  <OrderDetailBtn
                    label="주문취소"
                    handleClick={handleOrderCancel}
                    disabled={false}
                  />
                )}
              </div>
            ) : (
              item.category !== "주문상태" && (
                <TableRow
                  key={item.category}
                  category={item.category}
                  header={viewSizeState === "web"}
                  content={
                    item.category === "주문일시"
                      ? orderDateFormat(data.orderDate)
                      : `${data[item.content as keyof typeof data]}`
                  }
                  rowStyle={
                    "border-b border-sub-black max-xsm:border-b-[0.5px] max-xsm:border-main-color"
                  }
                />
              )
            )
          )}
        </div>
      </div>
      <div className="flex flex-col">
        {viewSizeState === "web" ? (
          <ManagerTitle title="여행자 정보" style="mb-[12px]" />
        ) : (
          <SectionTitle title="여행자 정보" titleStyle="max-xsm:text-[16px]" />
        )}
        <div className="flex flex-col gap-[48px] max-xsm:pt-[6px]">
          {travelerInfoList.map((info, index) => (
            <OrderedTravelerInfo
              data={info}
              key={`info_${index}`}
              id={index}
              handleDelete={handleDeleteTraveler}
              handleEdit={handleEditTraveler}
              startDate={data.startDate}
              role={role}
              orderState={"orderState" in data ? data.orderState : undefined}
              editableInfo={editableInfo}
              handleEditableInfo={handleEditableInfo}
            />
          ))}
        </div>
        {"orderState" in data && data.orderState !== "취소" && (
          <OrderDetailBtn
            label="+"
            style="px-[80px] py-[px] text-[24px] w-fit self-center mt-[12px] font-light"
            handleClick={handleAddTraveler}
            disabled={editableInfo !== null}
          />
        )}
      </div>
    </div>
  );
};
export default OrderInfo;
