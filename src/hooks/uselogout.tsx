import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { loginCheck, userChildName } from "../atom/atom";

export const useLogout = () => {
  const navigate = useNavigate();
  const resetName = useResetRecoilState(userChildName);
  const resetLogin = useResetRecoilState(loginCheck);

  window.localStorage.removeItem("token");
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("role");
  resetName();
  resetLogin();
  navigate("/login");
  alert("세션이 만료되었습니다. 다시 로그인하세요.");
};
