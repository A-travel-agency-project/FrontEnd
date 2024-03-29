import { FluctuationInfos } from "../../../types/manager";
import { amountFormat } from "../../../utils/amountFormat";
import ManagerTitle from "../../Manager/ManagerTitle";
import TableRow from "./TableRow";

const SpecialAmountInfo = ({
  specialAmountInfo,
}: {
  specialAmountInfo: FluctuationInfos[];
}) => {
  return (
    <div>
      <ManagerTitle title="추가금 정보" style="mb-[12px] flex w-fit" />
      {specialAmountInfo.map((info, idx) => (
        <div className="mt-[30px]">
          <div className="flex justify-between border-y border-sub-black">
            <TableRow
              category={`추가금 ${idx + 1}`}
              header={true}
              content={`${amountFormat(info.changedPrice)} 원`}
            />
            <TableRow
              category="잔금 / 총금액"
              header={false}
              content={`${amountFormat(
                info.balanceSnapshot
              )} 원 / ${amountFormat(info.totalPriceSnapshot)} 원`}
            />
          </div>
          <TableRow
            category="사유"
            content={info.memo}
            header={true}
            rowStyle="border-b border-sub-black"
          />
        </div>
      ))}
    </div>
  );
};
export default SpecialAmountInfo;
