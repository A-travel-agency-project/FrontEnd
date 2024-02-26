import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Header/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SideNav from "./components/common/SideNav";
import MainManager from "./pages/manager/MainManager";
import OrderManager from "./pages/manager/OrderManager";
import PackageManager from "./pages/manager/PackageManager";
import ProductManager from "./pages/manager/ProductManager";
import Main from "./pages/Main";
import Community from "./pages/Community";
import TravelDetail from "./pages/TravelDetail";
import TravelProduct from "./pages/TravelProduct";
import Reservation from "./pages/Reservation";
import Intro from "./pages/Intro";
import MyPage from "./pages/MyPage";
import NewRegistration from "./pages/manager/NewRegistration";
import ProductDetail from "./pages/manager/ProductDetail";
import TagsManager from "./pages/manager/TagsManager";
import MyPageNav from "./components/MyPage/MyPageNav";
import EditMember from "./pages/EditMember";
import MyPageOrderInfo from "./pages/MyPageOrderInfo";
import { TopScroll } from "./hooks/TopScroll";
import { CheckoutPage } from "./pages/payment/CheckoutPage";

function App() {
  return (
    <div className="App">
      <TopScroll />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/check" element={<CheckoutPage />} />
        <Route element={<MyPageNav />}>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/editmember" element={<EditMember />} />
          <Route path="/mypageorderinfo" element={<MyPageOrderInfo />} />
        </Route>
        {/* 본문 네비게이션바 */}
        <Route element={<Nav />}>
          <Route path="/" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/community" element={<Community />} />
          <Route path="/traveldetail" element={<TravelDetail />} />
          <Route path="/travelproduct" element={<TravelProduct />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
        {/* 관리자 네비게이션바 */}
        <Route element={<SideNav />}>
          <Route path="/mainmanager" element={<MainManager />} />
          <Route path="/packagemanager" element={<PackageManager />} />
          <Route path="/productmanager" element={<ProductManager />} />
          <Route path="/ordermanager" element={<OrderManager />} />
          <Route path="/newregistration" element={<NewRegistration />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/tagsmanager" element={<TagsManager />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
