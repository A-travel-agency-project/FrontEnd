import ManagerTitle from "../ManagerTitle";
import TableRow from "./TableRow";

const PaymentInfo = () => {
  return (
    <div>
      <ManagerTitle title="결제정보" style="mb-[12px]" />
      <div>
        <TableRow category="결제승인일시" header={true} content={"ㅇ"} />
        <TableRow category="주문번호" header={true} content={"ㅇ"} />
        <TableRow category="결제수단" header={true} content={"ㅇ"} />
      </div>
    </div>
  );
};
export default PaymentInfo;
