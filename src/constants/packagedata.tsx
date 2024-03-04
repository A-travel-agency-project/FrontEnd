export const productListData = {
  content: [
    {
      productId: 11,
      productCode: "EW12402211711AA",
      startDate: "2024-10-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 12,
      productCode: "EW12402211712AA",
      startDate: "2024-10-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 13,
      productCode: "EW12402211713AA",
      startDate: "2024-10-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 14,
      productCode: "EW12402211714AA",
      startDate: "2024-10-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
    {
      productId: 15,
      productCode: "EW12402211715AA",
      startDate: "2024-10-12T07:51:01",
      endDate: "2023-10-18T07:51:01",
      maxCount: 50,
      nowCount: 0,
      airline: "아메리칸항공",
      price: 50000000,
      productState: "예약 가능",
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 5,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 5,
  size: 5,
  number: 0,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true,
  },
  first: true,
  numberOfElements: 5,
  empty: false,
};

export type ProductList = {
  productId: number;
  productCode: string;
  startDate: string;
  endDate: string;
  maxCount: number;
  nowCount: number;
  airline: string;
  price: number;
  productState: string;
};

export type ProductListData = {
  content: ProductList[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
