/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import SignUpInput from "../components/SignUp/SignUpInput";
import Button from "../components/common/Button";
import LoginSignUpBtn from "../components/common/LoginSignUpBtn";
import { useDebounce } from "../hooks/useDebounce";
import SignUpPopup from "../components/SignUp/SignUpPopup";

const SignUp = () => {
  // 입력정보
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [family, setFamily] = useState("");
  const [baby, setBaby] = useState("");
  const [gender, setGender] = useState(""); // 남녀 라디오버튼

  // debounce
  const debounceName = useDebounce(name, 300);
  const debounceBirth = useDebounce(birth, 300);
  const debounceEmail = useDebounce(email, 300);
  const debouncePassword = useDebounce(password, 300);
  const debouncePasswordConfirm = useDebounce(passwordConfirm, 300);
  const debouncePhone = useDebounce(phone, 300);
  const debounceFamily = useDebounce(family, 300);
  const debounceBaby = useDebounce(baby, 300);

  // 정규식
  const nameRegex = /^[가-힣]{3,4}$/;
  const birthRegex =
    /^(19\d{2}|20[0-1]\d)\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Z]).{6,}$/;

  const phoneNumberRegex = /^010-\d{4}-\d{4}$/;
  // 유효성검사
  const isValidName = nameRegex.test(debounceName);
  const isValidBirth = birthRegex.test(debounceBirth);
  const isValidEmail = emailRegex.test(debounceEmail);
  const isValidPassword = passwordRegex.test(debouncePassword);
  const isValidPhone = phoneNumberRegex.test(debouncePhone);
  const isValidPasswordConfirm =
    isValidPassword && debouncePasswordConfirm === debouncePassword
      ? true
      : false;

  // 입력값 change함수
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "birth":
        setBirth(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordconfirm":
        setPasswordConfirm(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "family":
        setFamily(value);
        break;
      case "baby":
        setBaby(value);
        break;
      default:
        break;
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col h-full justify-center items-center lg:w-[500px]">
        <div className="w-[170px] h-[50px] bg-main-color mb-[24px]" />
        <div className="w-full">
          <h2>필수항목입력</h2>
          <div className="relative flex justify-center items-center">
            <SignUpInput
              value={name}
              name="name"
              title="이름"
              placeholder="이름"
              onChange={handleInputChange}
            />
            {isValidName ? <SignUpPopup /> : <div>x</div>}
          </div>
          <div className="flex justify-between items-center pl-16 w-full">
            <div>성별</div>
            <div className="flex justify-between w-3/4 border border-main-color rounded-full py-3 pl-7 pr-16 mb-[5px]">
              {["남", "여"].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    onChange={handleRadioChange}
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
            onChange={handleInputChange}
          />
          <SignUpInput
            value={email}
            name="email"
            title="이메일"
            placeholder="uriel@naver.com"
            onChange={handleInputChange}
          />
          <SignUpInput
            value={password}
            name="password"
            title="비밀번호"
            placeholder="6자리이상 대문자 1개이상 포함"
            onChange={handleInputChange}
          />
          <SignUpInput
            value={passwordConfirm}
            name="passwordconfirm"
            title="비밀번호확인"
            placeholder=""
            onChange={handleInputChange}
          />
          <SignUpInput
            value={phone}
            name="phone"
            title="핸드폰번호"
            placeholder="010-1234-5678"
            onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <SignUpInput
              value={baby}
              name="baby"
              title="자녀대표이름"
              placeholder="애기이름"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <LoginSignUpBtn label="회원가입" />
      </div>
      <Button label="회원가입" />
    </>
  );
};

export default SignUp;
