import React from "react";

interface RegistProps {
  title: string;
}

const RegistSubInput = ({ title }: RegistProps) => {
  return (
    <div className="flex mt-5">
      <div className="bg-title-box w-20 px-3 whitespace-nowrap">{title}</div>
      <input className="border outline-none w-full" />
    </div>
  );
};

export default RegistSubInput;
