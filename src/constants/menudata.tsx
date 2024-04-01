import IconHamburger from "/public/icon_mb_hamburger.svg";
import IconCommunity from "/public/icon_mb_community.png";
import IconProduct from "/public/icon_mb_product.png";
import IconMyPage from "/public/icon_mb_mypage.png";
import IconMain from "/public/icon_mb_main.png";

export const MENU_LIST: { name: string; path: string; state?: string }[] = [
  {
    name: "우리엘소개",
    path: "/intro",
  },
  {
    name: "여행상품",
    path: "/travelproduct",
  },
  {
    name: "여행이야기",
    path: "/community",
  },
  {
    name: "공지사항",
    path: "/community",
  },
  {
    name: "자주묻는질문",
    path: "/community",
  },
];

// export const MOBILE_MENU_LIST = {
//   {
//     name: "전체메뉴",
//     path: "/community",
//   },
// }
