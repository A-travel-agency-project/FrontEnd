import React from "react";
import UiEditor from "../components/common/UiEditor";
import SectionTitle from "../components/main/SectionTitle";

const Community = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="h-[400px] w-full bg-main-color mb-8" />
      <div className="flex ">
        <div className="flex flex-col items-start mr-9">
          <SectionTitle title="커뮤니티" padding={true} />
          {["공지사항", "여행이야기"].map((el, idx) => (
            <button
              key={idx}
              className={`border w-44 h-9 hover:bg-main-color hover:text-white ${
                idx === 0 ? "mb-2" : ""
              }`}
            >
              <span className="font-bold">{el}</span>
            </button>
          ))}
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex bg-title-box mb-2">
            <div className="whitespace-nowrap px-2 py-1">제목</div>
            <input className="w-full outline-none border border-title-box" />
          </div>
          <UiEditor />
          <div className="flex justify-end w-full mt-2">
            <button className="px-5 py-1 bg-main-color rounded-full text-white">
              <span>등록하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
