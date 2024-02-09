import { useState } from "react";
import Table from "../common/Table";
import { createColumnHelper } from "@tanstack/react-table";
type SummaryTableProps = {
  product_id: number;
  start_date: string;
  end_date: string;
  airline: string;
  min_count: number;
};

const SummaryTable = ({
  product_id,
  start_date,
  end_date,
  airline,
  min_count,
}: SummaryTableProps) => {
  const [data] = useState([
    {
      id: product_id,
      start_date: start_date,
      end_date: end_date,
      airline: airline,
      min_count: min_count,
    },
  ]);

  type SummaryTableInfo = {
    id: string;
    start_date: string;
    end_date: string;
    airline: string;
    price: number;
    min_count: number;
  };

  const columnHelper = createColumnHelper<SummaryTableInfo>();
  const columns = [
    columnHelper.accessor("id", { header: "상품번호" }),
    columnHelper.accessor("start_date", { header: "출발일시" }),
    columnHelper.accessor("end_date", { header: "도착일시" }),
    columnHelper.accessor("airline", { header: "항공" }),
    columnHelper.accessor("min_count", { header: "최소출발" }),
  ];

  return (
    <Table
      data={data}
      columns={columns}
      tableStyle={"w-[460px] text-[10px] text-sub-black"}
      thStyle={"border-[1px] border-main-color p-[6px]"}
      tbodyStyle={"text-center"}
      tdStyle={"border-[1px] border-main-color p-[6px]"}
    />
  );
};
export default SummaryTable;
