import { FluctuationInfos } from "../../../types/manager";
import { amountFormat } from "../../../utils/amountFormat";
import ManagerTitle from "../../Manager/ManagerTitle";
import TableRow from "./TableRow";

const AmountChangeHistory = ({
  changeHistory,
}: {
  changeHistory: FluctuationInfos[];
}) => {
  return (
    <div>
      <ManagerTitle
        title="금액/잔금 변경 히스토리"
        style="mb-[12px] flex w-fit"
      />
      {changeHistory.map((info) => (
        <div className="mt-[30px] border-y-[2px] border-sub-black">
          <div className="flex">
            <TableRow
              category={`변경일시`}
              header={false}
              content={info.updateDate}
            />
            <TableRow
              category="추가/감소 금액"
              header={false}
              content={`${amountFormat(info.changedPrice)} 원`}
            />
            <TableRow
              category="결제/취소 금액"
              content={`${amountFormat(info.payedPrice)} 원`}
              header={false}
            />
          </div>
          <div className="border-y border-sub-black">
            <TableRow category="변경사유" header={false} content={info.memo} />
          </div>
          <div className="flex justify-end w-full">
            <TableRow
              category="변경후 총액"
              header={false}
              content={`${amountFormat(info.totalPriceSnapshot)} 원`}
              rowStyle={"w-[33%]"}
            />
            <TableRow
              category="변경후 잔액"
              header={false}
              content={`${amountFormat(info.balanceSnapshot)} 원`}
              rowStyle={"w-[33%]"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default AmountChangeHistory;
