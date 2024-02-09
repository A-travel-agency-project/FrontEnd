import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductList } from "../../constants/packagedata";
import Table from "../common/Table";

type ProductListTableProps = {
  productList: ProductList;
};

const ProductListTable = ({ productList }: ProductListTableProps) => {
  const [data] = useState(
    productList.map((item) => ({
      ...item,
      id: item.productId,
      detail: (
        <button type="button" onClick={() => console.log("click")}>
          <Link to={"/traveldetail"}>자세히</Link>
        </button>
      ),
    }))
  );

  type ProductListInfo = {
    productId: string;
    start_date: string;
    end_date: string;
    airline: string;
    price: number;
    remaining_quantity: number;
    product_state: string;
    detail: JSX.Element;
  };

  const columnHelper = createColumnHelper<ProductListInfo>();
  const columns = [
    columnHelper.accessor("productId", { header: "상품번호" }),
    columnHelper.accessor("start_date", { header: "출발일시" }),
    columnHelper.accessor("end_date", { header: "도착일시" }),
    columnHelper.accessor("airline", { header: "항공" }),
    columnHelper.accessor("price", { header: "가격" }),
    columnHelper.accessor("remaining_quantity", { header: "잔여수량" }),
    columnHelper.accessor("product_state", { header: "상태" }),
    columnHelper.accessor("detail", {
      header: "상세확인하기",
      cell: ({ row }) => row.original.detail,
    }),
  ];

  return (
    <Table
      data={data}
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
  );
};
export default ProductListTable;
