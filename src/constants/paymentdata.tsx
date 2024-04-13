export const PAYMENT_TYPE = {
  NORMAL: "일반결제",
  BILLING: "자동결제",
  BRANDPAY: "브렌드페이",
};

export const PAYMENY_STATUS = {
  READY: "결제 인증 전",
  IN_PROGRESS: "결제 인증 완료",
  WAITING_FOR_DEPOSIT: "가상계좌 입금 전",
  DONE: "결제 승인",
  CANCELED: "결제 취소",
  PARTIAL_CANCELED: "부분 취소",
  ABORTED: "승인 실패",
  EXPIRED: "유효시간 지남",
};

export const PAYMENY_CATEGORIES = {
  approvedAt: "결제승인일시",
  orderId: "주문번호",
  method: "결제수단",
  totalAmount: "결제금액",
  status: "결제상태",
};

export const DETAIL_CATEGORIES = {
  customerName: "구매자명",
  amount: "결제금액",
  acquirerCode: "카드사 코드",
  approveNo: "카드사 승인번호",
  number: "카드번호",
  cardType: "카드종류",
  installmentPlanMonths: "할부개월",
  acquireStatus: "결제매입상태",
  accountType: "가상계좌타입",
  accountNumber: "발급된 계좌번호",
  bankCode: "은행 코드",
  dueDate: "입금기한",
  settlementStatus: "정산상태",
  refundStatus: "환불처리상태",
  customerMobilePhone: "핸드폰 번호",
  receiptUrl: "결제 영수증 주소",
  provider: "결제사 코드",
  discountAmount: "간편결제사 할인금액",
};

export const CANCEL_CATEGORIES = {
  cancelAmount: "취소금액",
  cancelReason: "취소이유",
  refundableAmount: "환불 가능한 잔액",
  canceledAt: "취소일시",
};

export const CASHRECEIPTS_CATEGORIES = {
  type: "타입",
  transactionType: "발급종류",
  requestedAt: "발급요청일시",
  issueStatus: "발급상태",
  issueNumber: "발급번호",
  amount: "처리금액",
  taxFreeAmount: "면세금액",
  receiptUrl: "확인주소",
};

export const METHOD_CATEGORIES = {
  카드: "card",
  가상계좌: "virtualAccount",
  간편결제: "easyPay",
  휴대폰: "mobilePhone",
  계좌이체: "transfer",
};

export const BANK_CODES = {
  "39": "경남은행",
  "34": "광주은행",
  "12": "단위농협",
  "32": "부산은행",
  "45": "새마을금고",
  "64": "산림조합",
  "88": "신한은행",
  "48": "신협",
  "27": "씨티은행",
  "20": "우리은행",
  "71": "우체국예금보험",
  "50": "저축은행중앙회",
  "37": "전북은행",
  "35": "제주은행",
  "90": "카카오뱅크",
  "89": "케이뱅크",
  "92": "토스뱅크",
  "81": "하나은행",
  "54": "홍콩상하이은행",
  "03": "IBK기업은행",
  "06": "KB국민은행",
  "31": "DGB대구은행",
  "02": "KDB산업은행",
  "11": "NH농협은행",
  "23": "SC제일은행",
  "07": "Sh수협은행",
};

export const CARD_CODES = {
  "3K": "기업 BC",
  "46": "광주은행",
  "71": "롯데카드",
  "30": "KDB산업은행",
  "31": "BC카드",
  "51": "삼성카드",
  "38": "새마을금고",
  "41": "신한카드",
  "62": "신협",
  "36": "씨티카드",
  "33": "우리BC카드(BC 매입)",
  W1: "우리카드(우리 매입)",
  "37": "우체국예금보험",
  "39": "저축은행중앙회",
  "35": "전북은행	",
  "42": "제주은행",
  "15": "카카오뱅크",
  "3A": "케이뱅크",
  "24": "토스뱅크	",
  "21": "하나카드	",
  "61": "현대카드	",
  "11": "KB국민카드",
  "91": "NH농협카드	",
  "34": "Sh수협은행",
  "6D": "다이너스 클럽",
  "4M": "마스터카드",
  "3C": "유니온페이",
  "7A": "아메리칸 익스프레스",
  "4J": "JCB",
  "4V": "VISA",
};
