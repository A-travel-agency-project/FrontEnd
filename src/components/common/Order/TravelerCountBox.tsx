const TravelerCountBox = ({
  role,
  count,
  style,
}: {
  role: string;
  count: number;
  style?: string;
}) => {
  return (
    <div
      className={`${style} w-[151px] flex items-center justify-center 
      max-xsm:text-[10px] max-xsm:bg-transparent max-xsm:justify-start max-xsm:max-w-[136.5px] max-xsm:w-fit`}
    >
      <span
        className="max-xsm:bg-[#F5F5F4] max-xsm:h-fit max-xsm:py-[8px] max-xsm:px-[10px]
      max-xsm:w-[68px]"
      >
        {role}
      </span>
      <div className="w-fit flex-shrink-0 max-xsm:w-[50px]">
        <span className="ml-[34px] max-xsm:ml-2">{count}</span>
        <span className="font-light ml-[6px]">명</span>
      </div>
    </div>
  );
};
export default TravelerCountBox;
