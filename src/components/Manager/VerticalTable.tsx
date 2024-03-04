const VerticalTable = ({ data, headers }) => {
  console.log(headers);
  console.log(data);
  return (
    <table className="text-left ">
      <tbody>
        {Object.entries(headers).map(([key, value]) => (
          <tr key={key} className="border-[1px] border-sub-black h-[40px]">
            <th className="max-w-[165px] p-[12px] border-r-[1px] border-sub-black bg-opacity-[0.05] bg-sub-black">
              {value}
            </th>
            <td className="p-[12px]">
              {data[key as keyof typeof data]
                ? data[key as keyof typeof data]
                : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default VerticalTable;
