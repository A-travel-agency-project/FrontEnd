import { useSearchParams } from "react-router-dom";
import usePostDeposit from "../../queries/orders/usePostDeposit";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { BalanceRequset, PaymentData } from "../../types/payment";

const AfterPayment = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");
  const payFor = searchParams.get("payFor");

  const storedPaymentInfo = sessionStorage.getItem("paymentInfo");
  const encryptedData = storedPaymentInfo
    ? JSON.parse(
        CryptoJS.AES.decrypt(
          storedPaymentInfo,
          import.meta.env.VITE_TOSS_CLIENTKEY
        ).toString(CryptoJS.enc.Utf8)
      )
    : null;

  const [requestData, setRequestData] = useState<
    PaymentData | BalanceRequset | null
  >(null);

  console.log(encryptedData);

  const { mutate, data, isPending, isError, error } = usePostDeposit(
    requestData,
    payFor
  );

  useEffect(() => {
    // reqData가 준비되었는지 확인 후 mutate 함수 호출
    if (paymentKey && amount && orderId && encryptedData) {
      setRequestData({
        ...encryptedData,
        paymentKey: paymentKey,
        amount: amount,
        ordereId: orderId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentKey, amount, orderId]);

  useEffect(() => {
    if (requestData && payFor) {
      console.log(requestData);
      mutate();
    }
  }, [requestData, mutate, payFor]);

  useEffect(() => {
    if (data) {
      sessionStorage.removeItem("paymentInfo"); // 결제 후 유저 정보 지우기
    }
  }, [data]);

  if (isPending) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return <div>에러 발생: {error?.message} </div>;
  }
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }
  if (data) {
    return <div>결제성공</div>;
  }
};
export default AfterPayment;
