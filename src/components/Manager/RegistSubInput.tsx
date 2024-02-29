import React from "react";

interface RegistProps {
  title: string;
  index: number;
  name: string;
  handleDayInputChange: (value: string, name: string, index: number) => void;
}

const RegistSubInput = ({
  title,
  handleDayInputChange,
  index,
  name,
}: RegistProps) => {
  return (
    <div className="flex mt-5">
      <div className="bg-title-box w-20 px-3 whitespace-nowrap">{title}</div>
      <input
        className="border outline-none w-full"
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleDayInputChange(e.currentTarget.value, e.target.name, index)
        }
        required
      />
    </div>
  );
};

export default RegistSubInput;
