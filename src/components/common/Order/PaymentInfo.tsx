import { useState } from "react";
import useGetPaymentInfo from "../../../queries/orders/useGetPaymentInfo";
import ManagerTitle from "../../Manager/ManagerTitle";
import PaymentInfoBox from "./PaymentInfoBox";
import TableRow from "./TableRow";
import { amountFormat } from "../../../utils/amountFormat";
import SpecialAmountInfo from "./SpecialAmountInfo";
import { FluctuationInfos } from "../../../types/manager";

const PaymentInfo = ({
  idList,
  role,
  specialAmountInfo,
}: {
  idList: string[];
  role: string;
  specialAmountInfo: FluctuationInfos[];
}) => {
  const { data, isError, errors } = useGetPaymentInfo(idList);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(data);

  const handleAmount = (amount: number) => {
    setTotalAmount((prev) => prev + amount);
  };

  if (isError) {
    errors?.map((error) => console.log(error?.message));
  }
  return (
    <div className="text-sub-black flex flex-col gap-[32px] text-[14px] ">
      <ManagerTitle title="결제정보" style="mb-[12px]" />
      {data !== undefined &&
        data.map(
          (info, idx) =>
            info && (
              <PaymentInfoBox
                info={info}
                idx={idx}
                key={`info_${idx}`}
                handleAmount={handleAmount}
              />
            )
        )}
      <TableRow
        category="총 결제 금액"
        header={true}
        content={`${amountFormat(totalAmount)} 원`}
        rowStyle="border-y border-sub-black"
      />
      {role === "admin" && (
        <SpecialAmountInfo specialAmountInfo={specialAmountInfo} />
      )}
    </div>
  );
};
export default PaymentInfo;