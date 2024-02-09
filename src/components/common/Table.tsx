import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TableProps<T> = {
  data: T[];
  columns;
  tableStyle?: string;
  theadStyle?: string;
  theadTrStyle?: string; // thead 내의 tr 스타일
  thStyle?: string;
  tbodyStyle?: string;
  tbodyTrStyle?: string; // tbody 내의 tr 스타일
  tdStyle?: string;
};

// components/TravelProduct/ProductListTable.tsx 참고

const Table = ({
  data,
  columns,
  tableStyle = "",
  theadStyle = "",
  theadTrStyle = "",
  thStyle = "",
  tbodyStyle = "",
  tbodyTrStyle = "",
  tdStyle = "",
}: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={tableStyle}>
      <thead className={theadStyle}>
        {table.getHeaderGroups().map((headerGroup, idx) => (
          <tr className={theadTrStyle} key={idx}>
            {headerGroup.headers.map((header, idx) => (
              <th key={idx} className={thStyle}>
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
      <tbody className={tbodyStyle}>
        {table.getRowModel().rows.map((row, idx) => (
          <tr key={idx} className={tbodyTrStyle}>
            {row.getVisibleCells().map((cell, idx) => (
              <td key={idx} className={tdStyle}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
