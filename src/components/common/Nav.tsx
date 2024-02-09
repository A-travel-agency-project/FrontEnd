import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="absolute top-0">nav</div>
      <Outlet />
    </>
  );
};
export default Nav;
