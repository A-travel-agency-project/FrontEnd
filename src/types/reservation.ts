import { Prices, ReservationInfo } from "./product";

export type PriceInfoData = {
  adult: {
    count: number;
    price: number;
    totalPrice: number;
  };
  child: {
    count: number;
    price: number;
    totalPrice: number;
  };
  infant: {
    count: number;
    price: number;
    totalPrice: number;
  };
  totalPay: number;
  totalCount: number;
};

export type ReservationBoxProps = {
  prices: Prices[];
  maxCount: number;
  nowCount: number;
  info: ReservationInfo;
  productState: string;
};

export interface travelerInfo {
  travelerName: string;
  enFirstName: string;
  enLastName: string;
  gender: string;
  birth: string;
  phoneNumber: string;
  representative: boolean;
}

export interface TermsState {
  travel: boolean;
  refund: boolean;
  privacy: boolean;
  identification: boolean;
  thirdperson: boolean;
  marketing: boolean;
}
