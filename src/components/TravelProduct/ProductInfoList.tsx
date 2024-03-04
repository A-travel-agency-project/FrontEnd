import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductList, productListData } from "../../constants/packagedata";
import Table from "../common/Table";
import usePostProducts from "../../queries/products/usePostProducts";
import { ProductListInfo, ProductListRequest } from "../../types/product";
import Pagination from "../common/Pagination";
import { productTableDate } from "../../utils/productTableDate";
import ReactDatePicker from "react-datepicker";
import { addMonths } from "date-fns";
import "./ProductLists.css";

const ProductInfoList = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState<number>(0);
  const [request, setRequest] = useState<ProductListRequest>({
    packageId: id | 0,
    offset: 0,
    limit: 5,
  });

  const listdata = [
    {
      productId: 11,
      productCode: "EW12402211711AA",
      startDate: "2024-03-02T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 12,
      productCode: "EW12402211712AA",
      startDate: "2024-03-18T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 13,
      productCode: "EW12402211713AA",
      startDate: "2024-03-20T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 14,
      productCode: "EW12402211714AA",
      startDate: "2024-04-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 15,
      productCode: "EW12402211715AA",
      startDate: "2024-04-18T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
  ];
  const [listData, setListData] = useState<ProductList[] | []>(listdata);

  // const { mutate, data, isPending, isError, error } = usePostProducts(request);
  const [tableData] = useState(
    listData &&
      listData.map((item) => ({
        ...item,
        startDate: productTableDate(item.startDate),
        endDate: productTableDate(item.endDate),
        id: item.productId,
        detail: (
          <button type="button">
            <Link to={"/traveldetail"} state={item.productId}>
              자세히
            </Link>
          </button>
        ),
      }))
  );

  const handleCalender = (e: [Date | null, Date | null]) => {
    console.log(e);
  };

  const highlightDates = useMemo(() => {
    return listData.map((item) => new Date(item.startDate));
  }, [listData]);

  const filterDate = (date: Date) => {
    return highlightDates.some(
      (highlightDate) =>
        date.getDate() === highlightDate.getDate() &&
        date.getMonth() === highlightDate.getMonth() &&
        date.getFullYear() === highlightDate.getFullYear()
    );
  };

  useEffect(() => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      offset: offset,
    }));
    console.log(request);
  }, [offset]);

  // useEffect(() => {
  //   mutate();
  //   if (data) setListData(data.content);
  //   else setListData(productListData.content);
  // }, [data, mutate]);

  const columnHelper = createColumnHelper<ProductListInfo>();
  const columns = [
    columnHelper.accessor("productId", { header: "상품번호" }),
    columnHelper.accessor("startDate", { header: "출발일시" }),
    columnHelper.accessor("endDate", { header: "도착일시" }),
    columnHelper.accessor("airline", { header: "항공" }),
    columnHelper.accessor("price", { header: "가격" }),
    columnHelper.accessor("productState", { header: "상태" }),
    columnHelper.accessor("detail", {
      header: "상세확인하기",
      cell: ({ row }) => row.original.detail,
    }),
  ];

  // if (isPending) {
  //   return <div>로딩 중...</div>;
  // }

  // if (isError) {
  //   return <div>에러 발생: {error?.message}</div>;
  // }
  // if (!data) {
  //   return <div>데이터가 없습니다.</div>;
  // }
  return (
    <>
      <ReactDatePicker
        selected={null}
        onChange={(e) => handleCalender(e)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 2)}
        monthsShown={2}
        selectsRange
        inline
        showDisabledMonthNavigation
        highlightDates={highlightDates}
        filterDate={filterDate}
      />

      <Table
        data={tableData}
        columns={columns}
        tableStyle={
          "text-center w-[750px] border-main-color border-t-[0.5px] border-b-[0.5px]"
        }
        theadStyle={
          "bg-main-color bg-opacity-10 h-[24px] mt-[1px] border-t-[0.5px] border-b-[0.5px] border-main-color"
        }
        thStyle={"text-[12px]"}
        tbodyStyle={"text-[10px]"}
        tbodyTrStyle={"border-t-[0.5px] border-dashed border-main-color"}
        tdStyle={"py-[14px]"}
      />
      <Pagination />
    </>
  );
};
export default ProductInfoList;
