import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";

type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  tableStyle?: string;
  theadStyle?: string;
  theadTrStyle?: string; // thead 내의 tr 스타일
  thStyle?: string;
  tbodyStyle?: string;
  tbodyTrStyle?: string; // tbody 내의 tr 스타일
  tdStyle?: string;
};

// components/TravelProduct/ProductListTable.tsx 참고

const Table = <T,>({
  data,
  columns,
  tableStyle = "",
  theadStyle = "",
  theadTrStyle = "",
  thStyle = "",
  tbodyStyle = "",
  tbodyTrStyle = "",
  tdStyle = "",
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={tableStyle}>
      <thead className={theadStyle}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className={theadTrStyle} key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={thStyle}>
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
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className={tbodyTrStyle}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={tdStyle}>
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
