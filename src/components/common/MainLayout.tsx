import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";
import Footer from "../common/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="flex-1 h-full w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
