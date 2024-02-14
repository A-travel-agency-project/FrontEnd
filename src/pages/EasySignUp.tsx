import { useState } from "react"
import LoginInput from "../components/Login/LoginInput"
import SignUpInput from "../components/SignUp/SignUpInput"
import Button from "../components/common/Button"
import LoginSignUpBtn from "../components/common/LoginSignUpBtn"

const EasySignUp = () =>{
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [family, setFamily] = useState("");
    const [baby, setBaby] = useState("");
    const [gender, setGender] = useState(""); // 남녀 라디오버튼
    return(
        <>
        <div className="flex flex-col h-full justify-center items-center lg:w-[500px]">
        <h2 className="text-main-color font-bold text-xl mb-20"> 간편회원가입 추가정보</h2>
          <div className="w-full">
            <h2>필수항목입력</h2>
            <div className="relative flex justify-center items-center">
              <SignUpInput
                value={name}
                name="name"
                title="이름"
                placeholder="이름"
              />
            </div>
            <div className="flex justify-between items-center pl-16 w-full">
              <div>성별</div>
              <div className="flex justify-between w-3/4 border border-main-color rounded-full py-3 pl-7 pr-16 mb-[5px]">
                {["남", "여"].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="gender"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <SignUpInput
              value={birth}
              name="birth"
              title="생년월일"
              placeholder="YYYY.MM.DD"
            />
            <SignUpInput
              value={email}
              name="email"
              title="이메일"
              placeholder="uriel@naver.com"
            />
         
            <SignUpInput
              value={phone}
              name="phone"
              title="핸드폰번호"
              placeholder="010-1234-5678"
            />
          </div>
          <div className="w-full">
            <h2>선택입력항목</h2>
            <div className="">
              <SignUpInput
                value={family}
                name="family"
                title="가족인원"
                placeholder="0"
              />
              <SignUpInput
                value={baby}
                name="baby"
                title="자녀대표이름"
                placeholder="애기이름"
              />
            </div>
          </div>
          <LoginSignUpBtn label="가입완료" />
        </div>
        <Button label="회원가입 추가정보" />
      </>
    )
}

export default EasySignUp