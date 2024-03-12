import React, { Dispatch, SetStateAction } from "react";

interface LoginInputProps {
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

const LoginInput = ({ placeholder, setState, name }: LoginInputProps) => {
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState(value);
  };
  return (
    <input
      placeholder={placeholder}
      name={name}
      onChange={handleLoginChange}
      className="outline-none border font-medium border-main-color w-full text-sm rounded-full py-3 px-2 mb-[5px]"
      type={name === "비밀번호" ? "password" : "text"}
    />
  );
};

export default LoginInput;
