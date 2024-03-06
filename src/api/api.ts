import { ProductListData } from "../constants/packagedata";
import { BlogPost } from "../types/community";
import { Img } from "../types/img";
import { Package } from "../types/package";
import { PaymentData } from "../types/payment";
import { ProductDetialInfo, ProductListRequest } from "../types/product";
import { TagCheckList, TagData } from "../types/tag";
import { User } from "../types/user";
import { baseInstance } from "./instance";

/* 배너 이미지 가져오기 */
export const GetBanner = (): Promise<Img[]> =>
  baseInstance.get("/images/banners").then((res) => res.data.data);

/* 태그 목록 가져오기 */
export const GetTags = (): Promise<TagData[]> =>
  baseInstance.get("/tags").then((res) => res.data.data);

/* 메인 커뮤니티 포스트 가져오기 */
export const GetMainPosts = (): Promise<BlogPost[]> =>
  baseInstance.get("/posts/blog").then((res) => res.data.data);

/* 여행지 가져오기 */
export const GetCountries = (): Promise<string[]> =>
  baseInstance.get("/countries").then((res) => res.data.data);

/* 패키지 목록 가져오기 */
export const GetPackages = async (country?: string): Promise<Package[]> => {
  const url = country ? `/packages/countries/${country}` : "/packages";
  console.log(url);
  const res = await baseInstance.get(url);
  return res.data.data;
};

/* 상품 상세보기 */
export const GetProduct = (id: number): Promise<ProductDetialInfo> =>
  baseInstance.get(`/products/${id}`).then((res) => res.data.data);

/* 상품 목록 가져오기*/
export const GetProducts = (
  req: ProductListRequest
): Promise<ProductListData> =>
  baseInstance.post("/procuts/search", req).then((res) => res.data.data);

/* 태그 검색 */
export const GetTagPackages = (req: TagCheckList): Promise<Package[]> =>
  baseInstance.post("/packages", req).then((res) => res.data.data);

/* 나라 검색 */
export const GetCountryPackages = (country: string): Promise<Package[]> =>
  baseInstance.get(`/countries/${country}`).then((res) => res.data.data);

/* 유저 정보 조회 */
export const GetUserInfo = (): Promise<User> =>
  baseInstance.get(`users/mypage`).then((res) => res.data.data);

/* 예약금 결제하기 */
export const PostDeposit = (req: PaymentData) =>
  baseInstance.post(`/payments/confirm`, req).then((res) => console.log(res));
