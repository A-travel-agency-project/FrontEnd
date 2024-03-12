import LoginInput from "../components/Login/LoginInput";
import LoginSignUpBtn from "../components/common/LoginSignUpBtn";
import Button from "../components/common/Button";
import KakaoLogin from "../components/Login/KakaoLogin";
import { useNavigate } from "react-router-dom";
import { baseInstance } from "../api/instance";
import { useState } from "react";

const Login = () => {
  const navigation = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  console.log(id, password);

  const handleLoginClick = () => {
    if (id !== "" && password !== "") {
      baseInstance
        .post("/auth/login", {
          email: id,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            alert("로그인 완료!");
            navigation("/");
          }
        });
    } else {
      alert("이메일 비밀번호를 입력해주세요!");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center h-full items-center lg:w-[500px]">
        <div className="w-[170px] h-[50px] bg-main-color mb-[24px]" />
        <LoginInput
          placeholder={"이메일 계정"}
          setState={setId}
          name="이메일"
        />
        <LoginInput
          placeholder={"비밀번호"}
          setState={setPassword}
          name="비밀번호"
        />
        <LoginSignUpBtn label="로그인" onClick={handleLoginClick} />
        <div className="flex justify-between w-full px-4 my-5 text-xs">
          <div className="flex">
            <button className="mr-4">아이디 찾기</button>
            <button>비밀번호 초기화</button>
          </div>
          <button onClick={() => navigation("/signup")}>회원가입</button>
        </div>
        <div className="bg-main-color w-full h-[1px]" />
        <div className="flex justify-end w-full">
          <KakaoLogin />
          <button>네이버</button>
        </div>
      </div>
      <Button label={"홈으로 가기"} loc="" />
    </>
  );
};
export default Login;
