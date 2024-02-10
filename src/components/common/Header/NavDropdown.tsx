import { Link } from "react-router-dom";

import "./Nav.css";

type NavDropdownProps = {
  handleMenuClose: () => void; // 함수 타입을 명시
};
const NavDropdown = ({ handleMenuClose }: NavDropdownProps) => {
  const FULL_MENU_LIST = [
    { title: "우리엘소개" },
    {
      title: "여행상품보기",
      list: {
        동유럽: "/travelproduct",
        프랑스위스: "/travelproduct",
        스페인: "/travelproduct",
        이탈리아: "/travelproduct",
        호주: "/travelproduct",
        뉴질랜드: "/travelproduct",
        대만: "/travelproduct",
        일본: "/travelproduct",
        동남아: "/travelproduct",
      },
    },
    {
      title: "커뮤니티",
      list: {
        여행이야기: "/community",
        자주묻는질문: "",
        공지사항: "/community",
        문의게시판: "",
      },
    },
  ];

  return (
    <div className="absolute w-[826px] overflow-hidden bg-white z-10 top-full px-[35px] py-[24px] flex flex-row gap-[20px] shadow">
      {FULL_MENU_LIST.map((menu) => (
        <div key={menu.title} className="w-1/6">
          <h2 className="text-main-color text-[14px] border-b-[1px] border-main-color mb-[10px]">
            {menu.title}
          </h2>
          {menu.list && (
            <ul className="text-sub-black text-[10px] flex gap-[6px] font-thin flex-col">
              {Object.entries(menu.list).map(([key, value]) => (
                <li key={key} onClick={handleMenuClose}>
                  <Link to={value}>{key}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
export default NavDropdown;
