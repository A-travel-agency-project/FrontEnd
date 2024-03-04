export const productdata = {
  packageInfo: {
    packageId: 17,
    packageName: "프랑스위스 6박 7일",
    summary: "프랑스와 스위스를 오가는 힐링여행",
    period: 6,
    privacy: "공개",
    countryName: "프랑스위스",
    price: 0,
    hashTag: "쇼핑없어요 인생사진찍어요 여름방학",
    hotelInfo: "hotelInfoMd",
    regionInfo: "regionInfoHtml",
    terms: "termsHtml",
    thumbnailList: [
      {
        originalImageName: "스크린샷 2024-02-04 000730.png",
        uploadImageName: "5c274b6d-8f09-4eff-8c5f-c62bf8ab8d07.png",
        imagePath: "thumbnails/2024/02/21",
        imageUrl:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2024/02/21/5c274b6d-8f09-4eff-8c5f-c62bf8ab8d07.png",
      },
    ],
    scheduleList: [
      {
        scheduleId: 1,
        day: 1,
        dayContent: null,
        hotel: "hotel1",
        meal: "meal1",
        vehicle: "vehicle1",
      },
      {
        scheduleId: 2,
        day: 2,
        dayContent: "contentHtml",
        hotel: "hotel2",
        meal: "meal2",
        vehicle: "vehicle2",
      },
    ],
    checkedTagList: null,
  },
  productInfo: {
    productId: 1,
    productCode: "EW12402211701AA",
    startDate: "2023-10-12T07:51:01",
    endDate: "2023-10-18T07:51:01",
    minCount: 30,
    maxCount: 50,
    nowCount: 0,
    productState: "예약 가능",
    airline: "아메리칸항공",
    price: 50000000,
    flagCarrier: 0,
    tourConductor: 0,
    shopping: 1,
    optionalTour: 1,
    adultPrice: 10000,
    adultSurcharge: 20000,
    childPrice: 30000,
    childSurcharge: 40000,
    infantPrice: 50000,
    infantSurcharge: 60000,
    keyPoint: "핵심 키포인트",
    includedProduct: "포함 상품",
    excludedProduct: "비포함 상품",
    reservationNotice: "예약정보",
    travelRegion: "여행지역 정보",
  },
};

export const PRODUCT_INFO_CATEGORIES = [
  {
    label: "상품 핵심포인트",
    sectionId: "keyPoint",
  },
  {
    label: "포함/불포함",
    sectionId: "includedProduct",
  },
  {
    label: "예약 유의사항",
    sectionId: "reservationNotice",
  },
];

export const SCHEDULE_INFO_CATEGORIES = [
  {
    label: "일정안내",
    sectionId: "scheduleList",
  },
  {
    label: "호텔안내",
    sectionId: "hotelInfo",
  },
  {
    label: "지역정보",
    sectionId: "regionInfo",
  },
  {
    label: "여행약관",
    sectionId: "terms",
  },
];

export const RESERVATION_INFO_CATEGORIES = {
  packageName: "패키지명",
  period: "몇박 몇일",
  startDate: "출발일",
  endDate: "도착일",
  airline: "항공사",
};
