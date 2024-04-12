import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
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
import NewRegistration from "./pages/manager/NewRegistration";
import ProductDetail from "./pages/manager/ProductDetail";
import OrderDetail from "./pages/manager/OrderDetail";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import TagsManager from "./pages/manager/TagsManager";
import MyPageNav from "./components/MyPage/MyPageNav";
import EditMember from "./pages/EditMember";
import MyPageOrderInfo from "./pages/MyPageOrderInfo";
import { TopScroll } from "./hooks/TopScroll";
import NewRegistrationEdit from "./pages/manager/NewRegistrationEdit";
import FindEmail from "./pages/FindEmail";
import ResetPassword from "./pages/ResetPassword";
import EasySignUp from "./pages/EasySignUp";
import KakaoOAuthCallback from "./components/Login/KakaoOAuthCallback";
import NaverOAuthCallback from "./components/Login/NaverOAuthCallback";
import PaymentCheckout from "./pages/PaymentCheckout";
import MainLayout from "./components/common/MainLayout";
import { loginCheck, userChildName, viewSize } from "./atom/atom";
import MbMainManager from "./pages/manager/MbMainManager";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import AfterPayment from "./pages/AfterPayment";
import MyPageOrderDetail from "./pages/MyPageOrderDetail";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => console.log(`${error.message}`),
    }),
  });

  const navigate = useNavigate();

  const setViewSize = useSetRecoilState(viewSize);
  const resetLogin = useResetRecoilState(loginCheck);
  const resetName = useResetRecoilState(userChildName);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setViewSize("mobile");
      } else {
        setViewSize("web");
      }
    };

    window.addEventListener("resize", handleResize);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setViewSize]);

  useEffect(() => {
    const handleRefreshFailed = () => {
      resetLogin();
      resetName();
      alert("세션이 만료되었습니다. 재로그인이 필요합니다.");
      navigate("/login");
    };

    window.addEventListener("refreshFailed", handleRefreshFailed);

    return () => {
      window.removeEventListener("refreshFailed", handleRefreshFailed);
    };
  }, [resetLogin, resetName, navigate]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TopScroll />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/easysignup" element={<EasySignUp />} />
          <Route path="/findemail" element={<FindEmail />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/kakao/oauth" element={<KakaoOAuthCallback />} />
          <Route path="/naver/oauth" element={<NaverOAuthCallback />} />
          {/* 본문 네비게이션바 */}
          <Route element={<MainLayout />}>
            <Route element={<MyPageNav />}>
              <Route path="/mypageorderinfo" element={<MyPageOrderInfo />} />
              <Route path="/editmember" element={<EditMember />} />
              <Route
                path="/myorderdetail/:orderId"
                element={<MyPageOrderDetail />}
              />
            </Route>
            <Route path="/" element={<Main />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:postId" element={<Community />} />
            <Route path="/traveldetail/:id" element={<TravelDetail />} />
            <Route path="/travelproduct" element={<TravelProduct />} />
            <Route
              path="/travelproduct/:category"
              element={<TravelProduct />}
            />
            <Route path="/reservation" element={<Reservation />} />
          </Route>
          {/* 관리자 네비게이션바 */}
          <Route element={<SideNav />}>
            <Route path="/mainmanager" element={<MainManager />} />
            <Route path="/mbmainmanager" element={<MbMainManager />} />
            <Route path="/packagemanager" element={<PackageManager />} />
            <Route path="/productmanager" element={<ProductManager />} />
            <Route path="/ordermanager" element={<OrderManager />} />
            <Route path="/orderdetail/:id" element={<OrderDetail />} />
            <Route path="/newregistration" element={<NewRegistration />} />
            <Route
              path="/packagemanager/:id"
              element={<NewRegistrationEdit />}
            />
            <Route path="/productdetail/:edit" element={<ProductDetail />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/tagsmanager" element={<TagsManager />} />
          </Route>
          <Route path="/paymentcheckout" element={<PaymentCheckout />} />
          <Route path="/paymentcheckout/after/:id" element={<AfterPayment />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
export default App;
