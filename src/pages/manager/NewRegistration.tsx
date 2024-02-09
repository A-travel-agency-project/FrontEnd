import React, { useState } from "react";
import {
  country,
  packageThumbnailTitle1,
  packageThumbnailTitle2,
  packageTitle,
  registSubTitle,
  tagTitle,
} from "../../constants/data";
import UiEditor from "../../components/common/UiEditor";
import ManagerTitleBox from "../../components/Manager/ManagerTitleBox";
import MainManagerBtn from "../../components/Manager/MainManagerBtn";
import TagInput from "../../components/Manager/TagInput";
import PackageEditorList from "../../components/Manager/PackageEditorList";
import RegistSubInput from "../../components/Manager/RegistSubInput";

interface CountryData {
  key: string;
  value: string;
}
const NewRegistration = () => {
  const [days, setDays] = useState([{ day: 1 }]);

  const addDay = () => {
    const newDay = days.length + 1;
    setDays([...days, { day: newDay }]);
  };
  const removeDay = () => {
    if (days.length > 1) {
      const updatedDays = [...days.slice(0, -1)];
      setDays(updatedDays);
    }
  };

  return (
    <div className="w-full h-full">
      {/* 이름 요약 여행지 */}
      <h2>패키지 신규/수정 등록</h2>
      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <ManagerTitleBox
            className="border-y border-l border-black"
            name="패키지 이름"
          />
          <div className="border pl-5  border-black outline-none w-full flex items-center">
            프랑스위스 5박 6일 알뜰관광
          </div>
        </div>
        <div className="flex w-full mb-3">
          <ManagerTitleBox
            className="border-l border-b border-black"
            name="패키지 요약"
          />
          <div className="pl-5 border-x border-b border-black outline-none w-full flex items-center">
            프랑스와 스위스를 오가는 힐링여행
          </div>
        </div>
        <div className="flex w-full mb-16">
          <div className="bg-title-box px-5 py-3 w-36">여행지</div>
          <select defaultValue="default" className="border border-black w-56">
            <option disabled value="default" hidden>
              전체 여행지
            </option>

            {country.map((el: CountryData) => {
              return <option value={el.key}>{el.value}</option>;
            })}
          </select>
        </div>
      </div>

      {/* 패키지 썸네일 */}
      <div className="w-full">
        <ManagerTitleBox name="패키지 썸네일" className="mb-2" />
        <div className="w-full flex">
          <div className="border px-6 py-4 w-[600px] mr-10">
            {packageThumbnailTitle1.map((el, index) => {
              return <MainManagerBtn className="mr-2" title={el} key={index} />;
            })}
          </div>
          <div className="border px-6 py-4 w-[600px]">
            {packageThumbnailTitle2.map((el, index) => {
              return <MainManagerBtn className="mr-2" title={el} key={index} />;
            })}
          </div>
        </div>
        <div className="w-full flex justify-center mb-20 mt-7">
          <button className="border px-4 py-2">확인</button>
        </div>
      </div>
      {/* 태그 */}
      <div className="flex flex-col w-full mb-36">
        <div className="flex w-full mb-9">
          <ManagerTitleBox name="태그" className="h-10 mr-10" />
          <div className="flex flex-col w-full">
            {tagTitle.map((el, index) => {
              return <TagInput title={el} key={index} />;
            })}
          </div>
        </div>
        <div className="flex items-center">
          <ManagerTitleBox name="자유태그" className="mr-10" />
          <TagInput title="자유태그" />
        </div>
      </div>
      {/* 일정안내 */}
      <div className="w-full">
        <h2 className="font-bold text-xl mb-4">일정 안내</h2>
        {days.map((day, index) => (
          <div className="flex w-full mb-20" key={index}>
            <div>
              <ManagerTitleBox
                name={`${day.day}일차`}
                className="border border-black mr-4"
              />
              {index > 0 && (
                <div>
                  <button
                    className="bg-title-box px-5 py-3 w-36 flex justify-center border border-black"
                    onClick={removeDay}
                  >
                    삭제하기
                  </button>
                </div>
              )}
              {index === days.length - 1 && (
                <button
                  className="bg-title-box px-5 py-3 w-36 flex justify-center border border-black"
                  onClick={addDay}
                >
                  +
                </button>
              )}
            </div>
            <div className="flex flex-col w-full">
              <div className="flex mb-4">
                <div className="bg-title-box px-5 whitespace-nowrap">제목</div>
                <input className="w-full outline-none border" />
              </div>
              <UiEditor />
              {registSubTitle.map((el) => {
                return <RegistSubInput title={el} />;
              })}
            </div>
          </div>
        ))}
      </div>
      <div>
        {packageTitle.map((el, index) => {
          return <PackageEditorList key={index} title={el} />;
        })}
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full h-[1px] my-16 bg-black" />
        <button className="bg-title-box px-20 py-3 border border-black">
          등록하기
        </button>
      </div>
    </div>
  );
};

export default NewRegistration;
