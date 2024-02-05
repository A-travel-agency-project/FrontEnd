import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import { useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

type NavMenuProps = {
  handleFullMenu: () => void;
  handleMenuClose: () => void;
  isMenuOpen: boolean;
};

const NavMenu = ({
  handleFullMenu,
  handleMenuClose,
  isMenuOpen,
}: NavMenuProps) => {
  const MENU_LIST: { name: string; path?: string }[] = [
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
    },
  ];

  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    handleMenuClose();
  };
  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <ul
      className="flex border-y-[1px] border-main-color h-[37px] pr-[240px]
    items-center justify-center gap-[33px] text-[14px] w-full text-sub-black"
    >
      <li ref={dropdownRef}>
        <button className="flex gap-[15px]" onClick={handleFullMenu}>
          {!isMenuOpen ? <span>≣</span> : <span>x</span>}
          <span>전체메뉴</span>
        </button>
        {isMenuOpen && <NavDropdown handleMenuClose={handleMenuClose} />}
      </li>
      {MENU_LIST.map((menu) => (
        <li key={menu.name}>
          {menu.path ? <Link to={menu.path}>{menu.name}</Link> : menu.name}
        </li>
      ))}
    </ul>
  );
};
export default NavMenu;
