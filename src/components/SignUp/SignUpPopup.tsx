import React from "react";
import "./signUpPopup.css";

interface PopupProps{
  check:string;
  text:string
}

const SignUpPopup = ({check,text}:PopupProps) => {
  return (
    <div className="flex justify-center items-center absolute -right-44">
      <div>{check}</div>
      <div className="balloon">{text}</div>
    </div>
  );
};

export default SignUpPopup;
