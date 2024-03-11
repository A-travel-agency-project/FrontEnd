import React from "react";

interface ProductIconProps {
  title: string;
  firstLabel: string;
  secondLabel: string;
}

const ProductIcon = ({ title, firstLabel, secondLabel }: ProductIconProps) => {
  return (
    <div className="flex border w-full">
      <div className="ml-5 w-40">{title}</div>
      <div className="flex items-center">
        <input type="radio" name="check" value={firstLabel} />
        <div className="w-20">{firstLabel}</div>
        <input type="radio" name="check" value={secondLabel} />
        <span>{secondLabel}</span>
      </div>
    </div>
  );
};

export default ProductIcon;
