import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigation = useNavigate();
  const managerNavOption = [
    { title: "메인 관리 페이지", prams: "/mainmanager" },
    { title: "패키지 관리 페이지", prams: "/packagemanager" },
    { title: "상품 관리 페이지", prams: "/productmanager" },
    { title: "주문 관리 페이지", prams: "/ordermanager" },
  ];
  const handleSideClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLButtonElement;
    navigation(target.name);
  };
  return (
    <div className="w-full flex h-full">
      <div className="h-full flex flex-col p-10 border-r border-main-color mr-20">
        {managerNavOption.map((el, index) => {
          return (
            <button
              className="flex whitespace-nowrap p-7 border-b border-main-color border-dotted"
              key={index}
              name={el.prams}
              onClick={handleSideClick}
            >
              <span>{el.title}</span>
            </button>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};
export default SideNav;
