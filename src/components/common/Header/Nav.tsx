import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";
import AskBtn from "../AskBtn";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleFullMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleMenuClose = () => {
    if (isMenuOpen) setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex flex-col w-[100vw] min-w-[823px] absolute bg-white items-center">
        <div className="justify-center flex top-0 h-[179px] items-end pb-[10px] w-full">
          <div className="flex gap-[30px] flex-grow-[0.28] items-center">
            <Link to={"/"}>
              <h1 className="logo text-[32px] text-main-color">아이맘투어</h1>
            </Link>
            <input
              className="focus:outline-none px-[10px] w-[276px] h-[32px] 
              rounded-[16px] border-main-color border-2 justify-between text-[12px]"
            />
          </div>
          <UserMenu />
        </div>
        <NavMenu
          handleFullMenu={handleFullMenu}
          handleMenuClose={handleMenuClose}
          isMenuOpen={isMenuOpen}
        />
      </nav>
      <Outlet />
      <AskBtn />
    </>
  );
};
export default Nav;
