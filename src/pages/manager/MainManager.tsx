import React from "react";
import MainManagerBtn from "../../components/Manager/MainManagerBtn";
import { fileTitle } from "../../constants/data";
import MainTitle from "../../components/Manager/ManagerTitle";

const MainManager = () => {
  return (
    <div className="flex flex-col items-center pl-36 h-full">
      <MainTitle title={"메인관리-배너수정"} />
      <div className="border p-2 w-[600px]">
        {fileTitle.map((el, index) => {
          return <MainManagerBtn className="" title={el} key={index} />;
        })}
      </div>
      <button className="flex items-center justify-center border w-[32px] whitespace-nowrap px-10 py-1 mt-2">
        <span>확인</span>
      </button>
    </div>
  );
};

export default MainManager;
