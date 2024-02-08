import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type ScheduleData = {
  start_date: string;
  end_date: string;
  remaining_quantity: number;
  airline: string;
  price: number;
  product_state: string;
};

type ScheduleTableProps = {
  scheduleData: ScheduleData[];
};

const ScheduleTable = ({ scheduleData }: ScheduleTableProps) => {
  const [data] = useState(
    scheduleData.map((item) => ({
      ...item,
      detail: (
        <button type="button" onClick={() => console.log("click")}>
          {" "}
          자세히{" "}
        </button>
      ),
    }))
  );
  type ScheduleInfo = {
    start_date: string;
    end_date: string;
    airline: string;
    price: number;
    remaining_quantity: number;
    product_state: string;
    detail: JSX.Element;
  };

  const columnHelper = createColumnHelper<ScheduleInfo>();
  const columns = [
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="text-center w-[750px] border-main-color border-t-[0.5px] border-b-[0.5px]">
      <thead className="bg-main-color bg-opacity-10 h-[24px] mt-[1px] border-t-[0.5px] border-b-[0.5px] border-main-color">
        {table.getHeaderGroups().map((headerGroup, idx) => (
          <tr key={idx}>
            {headerGroup.headers.map((header, idx) => (
              <th key={idx} className="text-[12px]">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="text-[10px]">
        {table.getRowModel().rows.map((row, idx) => (
          <tr
            key={idx}
            className="border-t-[0.5px] border-dashed border-main-color"
          >
            {row.getVisibleCells().map((cell, idx) => (
              <td key={idx} className=" py-[14px]">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ScheduleTable;
