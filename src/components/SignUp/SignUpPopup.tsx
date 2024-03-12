import React from "react";
import "./signUpPopup.css";

const SignUpPopup = () => {
  return (
    <div className="flex justify-center items-center absolute -right-44">
      <img src="/X체크.svg" />
      <div className="balloon">잘못 된 형식입니다.</div>
    </div>
  );
};

export default SignUpPopup;
