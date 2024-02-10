import React from "react";

interface ProductIconProps {
  title: string;
  firstLabel: string;
  secondLabel: string;
}

const ProductIcon = ({ title, firstLabel, secondLabel }: ProductIconProps) => {
  return (
    <div className="flex border w-full">
      <div className="ml-5 flex-grow">{title}</div>
      <div className="flex-grow">
        <input type="radio" name="check" value={firstLabel} />
        {firstLabel}
      </div>
      <input type="radio" name="check" value={secondLabel} />
      {secondLabel}
    </div>
  );
};

export default ProductIcon;
