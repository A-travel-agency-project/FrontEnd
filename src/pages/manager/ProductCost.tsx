import React from "react";

interface ProductCostProps {
  title1: string;
  title2: string;
}

const ProductCost = ({ title1, title2 }: ProductCostProps) => {
  return (
    <div className="flex border w-full">
      <div className="flex">
        <div className="whitespace-nowrap">{title1}</div>
        <input className="outline-none border" />
      </div>
      <div className="flex ">
        <div className="whitespace-nowrap">{title2}</div>
        <input className="outline-none border" />
      </div>
    </div>
  );
};

export default ProductCost;
