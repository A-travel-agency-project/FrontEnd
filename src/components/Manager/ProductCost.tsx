import React from "react";

interface ProductCostProps {
  title1: string;
  title2: string;
}

const ProductCost = ({ title1, title2 }: ProductCostProps) => {
  return (
    <div className="flex border-b border-black w-full">
      <div className="flex items-center">
        <div className="whitespace-nowrap mx-5">{title1}</div>
        <input className="outline-none border" />
      </div>
      <div className="flex items-center">
        <div className="whitespace-nowrap mx-5">{title2}</div>
        <input className="outline-none border" />
      </div>
    </div>
  );
};

export default ProductCost;
