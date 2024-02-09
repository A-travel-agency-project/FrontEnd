export const productdata = {
  package_info: {
    package_id: 1,
    package_name: "프랑스위스 6박 7일",
    summary: "프랑스와 스위스를 오가는 힐링여행",
    period: 6,
    country: "프랑스위스",
    price: 4770000,
    hash_tag: "쇼핑없어요 인생사진찍어요 여름방학",
    hotel_info: "hotel_info",
    region_info: "region_info",
    terms: "terms",
    thumbnail_list: [
      {
        original_image_name: "다운로드 (8).png",
        upload_image_name: "43caaf9e-7b2c-4a8e-8931-787b7f3d19c6.png",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/43caaf9e-7b2c-4a8e-8931-787b7f3d19c6.png",
      },
      {
        original_image_name: "다운로드 (1).jfif",
        upload_image_name: "8370ef57-83ba-4b1e-b4a6-87b7dafa211c.jfif",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/8370ef57-83ba-4b1e-b4a6-87b7dafa211c.jfif",
      },
      {
        original_image_name: "다운로드 (8).png",
        upload_image_name: "43caaf9e-7b2c-4a8e-8931-787b7f3d19c6.png",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/43caaf9e-7b2c-4a8e-8931-787b7f3d19c6.png",
      },
      {
        original_image_name: "다운로드 (1).jfif",
        upload_image_name: "8370ef57-83ba-4b1e-b4a6-87b7dafa211c.jfif",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/8370ef57-83ba-4b1e-b4a6-87b7dafa211c.jfif",
      },
      {
        original_image_name: "다운로드 (1).jfif",
        upload_image_name: "8370ef57-83ba-4b1e-b4a6-87b7dafa211c.jfif",
        image_path: "thumbnails/2023/10/12",
        image_url:
          "https://uriel-be.s3.ap-northeast-2.amazonaws.com/thumbnails/2023/10/12/8370ef57-83ba-4b1e-b4a6-87b7dafa211c.jfif",
      },
    ],
    schedule_list: [
      {
        schedule_id: 1,
        day: 1,
        day_content: "content1",
        hotel: "hotel1",
        meal: "meal1",
        vehicle: "vehicle1",
      },
      {
        schedule_id: 2,
        day: 2,
        day_content: "content2",
        hotel: "hotel2",
        meal: "meal2",
        vehicle: "vehicle2",
      },
    ],
  },
  product_info: {
    product_id: 1,
    start_date: "2023-10-12T07:51:01",
    end_date: "2023-10-18T07:51:01",
    min_count: 30,
    max_count: 50,
    now_count: 0,
    product_state: "RESERVATION_AVAILABLE",
    airline: "대한항공12",
    price: 50000000,
    flag_carrier: 0,
    tour_conductor: 0,
    shopping: 1,
    optional_tour: 1,
    adult_price: 10000,
    adult_surcharge: 20000,
    child_price: 30000,
    child_surcharge: 40000,
    infant_price: 50000,
    infant_surcharge: 60000,
    key_point: "핵심 키포인트",
    included_product: "포함 상품",
    excluded_product: "비포함 상품",
    reservation_notice: "예약정보",
    travel_region: "여행지역 정보",
  },
};

export type ProductInfoData = {
  product_id: number;
  start_date: string;
  end_date: string;
  min_count: number;
  max_count: number;
  now_count: number;
  product_state: string;
  airline: string;
  price: number;
  flag_carrier: number;
  tour_conductor: number;
  shopping: number;
  optional_tour: number;
  adult_price: number;
  adult_surcharge: number;
  child_price: number;
  child_surcharge: number;
  infant_price: number;
  infant_surcharge: number;
  key_point: string;
  included_product: string;
  excluded_product: string;
  reservation_notice: string;
  travel_region: string;
};

export type Schedule = {
  schedule_id: number;
  day: number;
  day_content: string;
  hotel: string;
  meal: string;
  vehicle: string;
};

export type ScheduleListData = Schedule[];

export type Thumbnail = {
  original_image_name: string;
  upload_image_name: string;
  image_path: string;
  image_url: string;
};

export type ThumbnailListData = Thumbnail[];

export type PackageInfoData = {
  package_id: number;
  package_name: string;
  summary: string;
  period: number;
  country: string;
  price: number;
  hash_tag: string;
  hotel_info: string;
  region_info: string;
  terms: string;
  thumbnail_list: Thumbnail[];
  schedule_list: Schedule[];
};

export const PRODUCT_INFO_CATEGORIES = [
  {
    label: "상품 핵심포인트",
    sectionId: "key_point",
  },
  {
    label: "포함/불포함",
    sectionId: "included_product",
  },
  {
    label: "예약 유의사항",
    sectionId: "reservation_notice",
  },
];

export const SCHEDULE_INFO_CATEGORIES = [
  {
    label: "일정안내",
    sectionId: "schedule_list",
  },
  {
    label: "호텔안내",
    sectionId: "hotel_info",
  },
  {
    label: "지역정보",
    sectionId: "region_info",
  },
  {
    label: "여행약관",
    sectionId: "terms",
  },
];

export type INFO_CATEGORIES = {
  label: string;
  sectionId: string;
}[];
