import React, { ChangeEvent } from "react";
import { formatPhoneNum } from "../../hooks/formatPhoneNum";
import "./signUpInput.css"

interface SignUpInputProps {
  placeholder: string;
  title: string;
  name: string;
  value: string;
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SignUpInput = ({
  placeholder,
  title,
  onChange,
  name,
  value,
  className
}: SignUpInputProps) => {
  return (
    <div className={`w-full flex justify-between items-center pl-16 relative ${className}`}>
      <div className="text-sm">{title}</div>
      <input
        placeholder={placeholder}
        value={name === "phone" ? formatPhoneNum(value) : value}
        className="outline-none border font-medium border-main-color w-3/4 text-sm rounded-full py-3 pl-7 mb-[5px]"
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default SignUpInput;
