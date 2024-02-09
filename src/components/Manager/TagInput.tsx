import React from "react";

interface TagTitleProps {
  title: string;
}

const TagInput = ({ title }: TagTitleProps) => {
  return (
    <div className="flex justify-between w-full mb-5">
      <div className="whitespace-nowrap w-20">{title}</div>
      <input className="w-full outline-none border border-black" />
    </div>
  );
};

export default TagInput;
