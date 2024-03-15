export const ORDER_DATA_CATEGORIES = {
  imomOrderId: "주문번호",
  reserveUser: "예약자명",
  productCode: "상품번호",
  orderDate: "주문일시",
  packageName: "패키지명",
  startDate: "출발일",
  email: "이메일(ID)",
  phoneNumber: "핸드폰",
  totalCount: "총인원",
  orderState: "결제상태",
};

export const ORDER_EMPTYDATA = {
  imomOrderId: null,
  reserveUser: null,
  productCode: null,
  orderDate: null,
  packageName: null,
  startDate: null,
  email: null,
  phoneNumber: null,
  totalCount: null,
  orderState: null,
};

export const ORDER_STATES = [
  "전체",
  "결제 대기",
  "예약금 완료",
  "잔금 완료",
  "추가 결제 필요",
  "환불 필요",
  "취소",
];

export const ORDER_DETAIL_CATEGORIES = [
  {
    label: "주문확인",
    sectionId: "orderInfo",
  },
  {
    label: "결제정보",
    sectionId: "paymentInfo",
  },
];

export const ORDER_INFO_CATEGORIES = [
  { category: "주문번호", content: "imomOrderId" },
  { category: "주문일시", content: "orderDate" },
  { category: "주문상태", content: "orderState" },
  { category: "여행대표자", content: "travelerInfos" },
  { category: "패키지이름", content: "packageName" },
  { category: "상품번호", content: "productCode" },
  { category: "출발일시", content: "startDate" },
  { category: "도착일시", content: "endDate" },
  { category: "총인원", content: "count" },
];

export const COUNT_CATEGORIES = {
  성인: "adultCount",
  아동: "childCount",
  유아: "infantCount",
};
