import React, { ChangeEvent } from "react";
import { formatPhoneNum } from "../../hooks/formatPhoneNum";
import SignUpCheck from "./\bSignUpCheck";
import SignUpPopup from "./SignUpPopup";

interface SignUpInputProps {
  placeholder: string;
  title: string;
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  length?: number;
  type: string;
}

const SignUpInput = ({
  placeholder,
  title,
  onChange,
  name,
  value,
  isValid,
  length,
  type,
}: SignUpInputProps) => {
  return (
    <div className="flex justify-between w-full items-center pl-16 relative">
      <div>{title}</div>
      <input
        placeholder={placeholder}
        value={value}
        className="outline-none border font-medium border-main-color w-3/4 text-sm rounded-full py-3 pl-7 mb-[5px]"
        onChange={onChange}
        name={name}
        type={type}
      />
      {isValid ? <SignUpCheck /> : length > 0 && <SignUpPopup />}
    </div>
  );
};

export default SignUpInput;
