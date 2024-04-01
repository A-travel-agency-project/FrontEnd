import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../common/Table";
import usePostProducts from "../../queries/products/usePostProducts";
import {
  ProductList,
  ProductListInfo,
  ProductListRequest,
} from "../../types/product";
import { dateFormat } from "../../utils/dateFormat";
import ProductCalendar from "./ProductCalendar";
import CustomPagination from "../common/CustomPagination";
import { fillData } from "../../utils/fillData";
import {
  EMPTY_MOBILE_TABLE_DATA,
  EMPTY_TABLE_DATA,
} from "../../constants/packagedata";
import { amountFormat } from "../../utils/amountFormat";

const ProductInfoList = ({ packageId }: { packageId: number }) => {
  const [request, setRequest] = useState<ProductListRequest>({
    packageId: packageId | 0,
    offset: 0,
    limit: 5,
  });
  const { mutate, data, isPending, isError, error } = usePostProducts(request);
  const [tableData, setTableData] = useState<ProductListInfo[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasSchedule, setHasSchedule] = useState(false);
  const [viewCategory, setViewCategory] = useState(
    window.innerWidth <= 375 ? "mobile" : "web"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setViewCategory("mobile");
      } else {
        setViewCategory("web");
      }
    };

    window.addEventListener("resize", handleResize);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const mobileColumns = [
    columnHelper.accessor("productId", { header: "상품번호" }),
    columnHelper.accessor("dates", {
      header: "출발~도착일시",
      cell: ({ row }) => row.original.dates,
    }),
    columnHelper.accessor("airline", { header: "항공" }),
    columnHelper.accessor("price", { header: "가격" }),
    columnHelper.accessor("productState", { header: "상태" }),
    columnHelper.accessor("detail", {
      header: "상세확인하기",
      cell: ({ row }) => row.original.detail,
    }),
  ];

  const handlePageClick = (selected: number) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      offset: selected,
    }));
  };

  useEffect(() => {
    mutate();
  }, [request, mutate]);

  useEffect(() => {
    console.log(viewCategory);
    if (data && data.content.length > 0) {
      setHasSchedule(true);
      setTotalPages(data.totalPages);
      if (viewCategory === "web") {
        setTableData(() => {
          const newTableData = data.content.map((item: ProductList) => ({
            ...item,
            price: `${amountFormat(+item.price)}원`,
            startDate: dateFormat(item.startDate),
            endDate: dateFormat(item.endDate),
            id: item.productId,
            detail: (
              <button
                type="button"
                className="bg-main-color py-[2px] px-[20px] rounded-[12px] text-white"
              >
                <Link to={`/traveldetail/${item.productId}`}>확인하기</Link>
              </button>
            ),
          }));
          return fillData(newTableData, 5, EMPTY_TABLE_DATA);
        });
      }
      if (viewCategory === "mobile") {
        setTableData(() => {
          const newTableData = data.content.map((item: ProductList) => ({
            ...item,
            price: `${amountFormat(+item.price)}원`,
            dates: (
              <>
                <div>{dateFormat(item.startDate)}</div>
                <div>{dateFormat(item.endDate)}</div>
              </>
            ),
            id: item.productId,
            detail: (
              <button
                type="button"
                className="bg-main-color py-[2px] px-[20px] rounded-[12px] text-white"
              >
                <Link to={`/traveldetail/${item.productId}`}>확인하기</Link>
              </button>
            ),
          }));
          return fillData(newTableData, 5, EMPTY_MOBILE_TABLE_DATA);
        });
      }
    } else if (data && data.content.length === 0) {
      setHasSchedule(false);
    }
  }, [data, viewCategory]);

  if (isError) {
    return <div>에러 발생: {error?.message}</div>;
  }
  if (isPending) {
    return;
  }
  if (!hasSchedule) {
    return (
      <div className="max-xsm:text-[10px]">추후 일정 업데이트 예정입니다.</div>
    );
  }
  return (
    <div className="max-xsm:w-full flex flex-col items-center gap-[10px]">
      <ProductCalendar packageId={packageId} />
      <Table
        data={tableData}
        columns={viewCategory === "web" ? columns : mobileColumns}
        tableStyle={
          "text-center w-[750px] border-main-color border-t-[0.5px] border-b-[0.5px] max-xsm:max-w-[375px] max-xsm:w-full"
        }
        theadStyle={
          "bg-main-color bg-opacity-10 h-[24px] mt-[1px] border-t-[0.5px] border-b-[0.5px] border-main-color"
        }
        thStyle={"text-[12px] font-medium max-xsm:text-[10px]"}
        tbodyStyle={"text-[10px] max-xsm:text-[8px]"}
        tbodyTrStyle={"border-t-[0.5px] border-dashed border-main-color"}
        tdStyle={"h-[36px] font-light"}
      />
      <CustomPagination
        totalPage={totalPages}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};
export default ProductInfoList;
