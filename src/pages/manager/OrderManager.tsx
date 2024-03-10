import ManagerTitle from "../../components/Manager/ManagerTitle";
import { ORDER_EMPTYDATA, ORDER_STATES } from "../../constants/managerdata";
import CustomPagination from "../../components/common/CustomPagination";
import { dateFormat } from "../../utils/dateFormat";
import ManagerDateBtns from "../../components/Manager/ManagerDateBtns";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import usePostMangerOrders from "../../queries/orders/usePostOrderList";
import { ManagerColumns, OrderList, OrderRequest } from "../../types/manager";
import { fillData } from "../../utils/fillData";
import ManagerTable from "../../components/Manager/ManagerTable";
import useGetCountries from "../../queries/countries/useGetCountries";
import FilterDropdown from "../../components/common/FilterDropdown";

const OrderManager = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState<OrderList[]>([]);
  const [orderReq, setOrderReq] = useState<OrderRequest>({
    orderDateMin: null,
    orderDateMax: null,
    packageId: null,
    country: null,
    orderState: null,
    userNameOrder: null,
    order: 0, // 주문일시 오름차순 : 0 , 내림차순 : 1
    start: 0, // 출발일 오름차순 : 0 , 내림차순 : 1
    offset: 0,
  });
  const [sortState, setSortSate] = useState<{ [key: string]: number | null }>({
    startDate: null,
    orderDate: null,
  });

  const [totalPages, setTotalPages] = useState<number>(0);

  const [countries, setCountries] = useState<string[]>([]);

  const [search, setSearch] = useState<{
    [key: string]: number | string | null;
  }>({});

  const { mutate, data, isPending, isError, error } =
    usePostMangerOrders(orderReq);

  const {
    data: countryData,
    isPending: countryIsPending,
    isError: countryIsError,
    error: countryError,
  } = useGetCountries();

  useEffect(() => {
    console.log(orderReq);
    if (
      (orderReq.orderDateMin && orderReq.orderDateMax) ||
      (!orderReq.orderDateMin && !orderReq.orderDateMax)
    )
      mutate();
  }, [orderReq, mutate]);

  useEffect(() => {
    if (data) {
      setOrderList(() => fillData(data.content, 10, ORDER_EMPTYDATA));
      setTotalPages(data.totalPages);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (countryData) {
      setCountries(() => ["전체", ...countryData]);
    }
  }, [countryData]);

  // table header의 주문일시, 출발일 정렬
  const handleSortOrder = (category: string) => {
    setSortSate((prev) => ({
      ...prev,
      [category]:
        !prev[category as keyof OrderRequest] ||
        prev[category as keyof OrderRequest] === 0
          ? 1
          : 0,
    }));
    const reqCategory = category.replace("Date", ""); // "start" || "order"
    setOrderReq((prev) => ({
      ...prev,
      [reqCategory]: prev[reqCategory as keyof OrderRequest] === 0 ? 1 : 0,
    }));
  };

  const handlePageClick = (selected: number) => {
    setOrderReq((prev) => ({
      ...prev,
      offset: selected,
    }));
  };

  const handleTableRow = (orderId: string) => {
    if (orderId) {
      navigate(`/orderdetail/${orderId}`);
    }
    return;
  };

  const handleDateBtns = (dates: { [key: string]: string | null }) => {
    setOrderReq((prev) => ({
      ...prev,
      orderDateMin: dates.dateMin ? dates.dateMin : null,
      orderDateMax: dates.dateMax ? dates.dateMax : null,
    }));
  };

  const handleDropdown = (value: string | number, id: string) => {
    setOrderReq((prev) => ({
      ...prev,
      [id]: value === "전체" ? null : value,
    }));
  };

  const handleSearchDropdown = (value: string, id: string) => {
    console.log(value, id);
  };

  const columns: ManagerColumns<OrderList> = [
    {
      key: "imomOrderId",
      label: "주문번호",
      sortable: false,
    },
    {
      key: "reserveUser",
      label: "예약자명",
      sortable: false,
    },
    {
      key: "productCode",
      label: "상품번호",
      sortable: false,
    },
    {
      key: "orderDate",
      label: "주문일시",
      sortable: true,
      render: (value) => (value ? dateFormat(`${value}`) : ""),
      onClick: () => handleSortOrder("orderDate"),
    },
    {
      key: "packageName",
      label: "패키지명",
      sortable: false,
    },
    {
      key: "startDate",
      label: "출발일",
      sortable: true,
      render: (value) => (value ? dateFormat(`${value}`) : ""),
      onClick: () => handleSortOrder("startDate"),
    },
    {
      key: "email",
      label: "이메일(ID)",
      sortable: false,
    },
    {
      key: "phoneNumber",
      label: "핸드폰",
      sortable: false,
    },
    {
      key: "totalCount",
      label: "총인원",
      sortable: false,
    },
    {
      key: "orderState",
      label: "결제상태",
      sortable: false,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[27px] mr-20 items-center min-w-[1290px]">
      <ManagerTitle title="주문목록" />
      <section className="w-full">
        <ManagerDateBtns title="주문 일시" handleDateBtns={handleDateBtns} />
        <div className="h-20 w-full flex items-center border-b border-black">
          <div className="w-40 bg-gray-200 flex justify-center items-center border-r border-black h-full flex-shrink-0">
            주문 필터
          </div>
          <div className="flex flex-row gap-5 px-5 h-[24px] items-center flex-shrink-0">
            <FilterDropdown
              label="결제 상태 :"
              list={ORDER_STATES}
              id={"orderState"}
              handleClick={handleDropdown}
              divStyle="flex p-[3px] gap-3"
              selectStyle="border border-sub-black"
            />
            {countryIsPending ? (
              <div>로딩중</div>
            ) : countryIsError ? (
              <div>{countryError?.message}</div>
            ) : (
              <FilterDropdown
                label="지역 :"
                list={countries}
                id={"country"}
                handleClick={handleDropdown}
                divStyle="flex p-[3px] gap-3"
                selectStyle="border border-sub-black"
              />
            )}
            <form className="flex flex-row items-center h-[24px] flex-shrink-0">
              <FilterDropdown
                label="주문 검색 :"
                list={["예약자명", "핸드폰", "이메일", "주문번호", "상품번호"]}
                id={"search"}
                handleClick={handleSearchDropdown}
                divStyle="flex p-[3px] gap-3 "
                selectStyle="border border-sub-black h-[24px]"
              />
              <input
                type="text"
                className="border border-sub-black h-[24px] text-center"
                placeholder="검색어를 입력하세요"
              />
              <button
                type="submit"
                className="ml-1 border-sub-black border px-2 h-full bg-gray-200 active:bg-gray-400"
              >
                검색
              </button>
            </form>
          </div>
        </div>
      </section>
      {isPending ? (
        <div>로딩중</div>
      ) : isError ? (
        <div>{error?.message}</div>
      ) : (
        <section className="w-full items-center gap-5 flex flex-col">
          <ManagerTable
            data={orderList}
            columns={columns}
            navigateId={"imomOrderId"}
            handleTableRow={handleTableRow}
            sortState={sortState}
          />
          <CustomPagination
            totalPage={totalPages}
            handlePageClick={handlePageClick}
          />
        </section>
      )}
    </div>
  );
};

export default OrderManager;
