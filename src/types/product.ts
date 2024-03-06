import { Package } from "./package";

export type Product = {
  productId: number;
  productCode: string;
  startDate: string;
  endDate: string;
  minCount: number;
  maxCount: number;
  nowCount: number;
  productState: string;
  airline: string;
  price: number;
  flagCarrier: number;
  tourConductor: number;
  shopping: number;
  optionalTour: number;
  adultPrice: number;
  adultSurcharge: number;
  childPrice: number;
  childSurcharge: number;
  infantPrice: number;
  infantSurcharge: number;
  keyPoint: string;
  includedProduct: string;
  excludedProduct: string;
  reservationNotice: string;
  travelRegion: string;
};

export type ProductDetialInfo = {
  packageInfo: Package;
  productInfo: Product;
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

export type Products = {
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
    unpaged: boolean;
    paged: boolean;
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
};

export type ProductListRequest = {
  ["packageId"]: number;
  ["offset"]: number;
  ["limit"]: number;
};

export type ProductListInfo = {
  productId: number;
  startDate: string;
  endDate: string;
  airline: string;
  price: number;
  productState: string;
  detail: string | JSX.Element;
};

export type SummaryTableProps = {
  productId: number;
  startDate: string;
  endDate: string;
  airline: string;
  minCount: number;
};

export type SummaryTableInfo = {
  id: string;
  startDate: string;
  endDate: string;
  airline: string;
  price: number;
  minCount: number;
};

export type Schedule = {
  scheduleId: number;
  day: number;
  dayContent: HTMLElement | string;
  hotel: string;
  meal: string;
  vehicle: string;
};

export type ScheduleListProps = {
  scheduleListData: Schedule[];
};

export type ScheduleItemProps = {
  title?: string;
  content: string | HTMLElement;
};

export type Prices = {
  age: string;
  price: number;
  surcharge: number;
};

export type ReservationInfo = {
  packageName: string;
  period: string;
  startDate: string;
  endDate: string;
  airline: string;
  productId: number;
};
