import { useState } from "react";
import { travelerInfo } from "../../types/reservation";

const TravelerInfoForm = ({
  role,
  isRepresentative,
  handleTravelerInfo,
  listIndex,
}: {
  role: string;
  isRepresentative: boolean;
  handleTravelerInfo: (index: number, info: travelerInfo) => void;
  listIndex: number;
}) => {
  const [info, setInfo] = useState({
    travelerName: "",
    enFirstName: "",
    enLastName: "",
    gender: "남",
    birth: "",
    phoneNumber: "",
    isRepresentative: isRepresentative,
  });

  const handleInput = (id: string, value: string) => {
    setInfo((prev) => {
      const updatedInfo = { ...prev, [id]: value };
      return updatedInfo;
    });
    handleTravelerInfo(listIndex, { ...info, [id]: value });
  };

  const phoneNumberFormat = (num: string) => {
    return num
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(-{1,2})$/g, "");
  };

  const onlyEnglish = (name: string) => {
    // enFirstName, enLastName 정규식 (영문만 가능)
    if (name && !/^[a-zA-Z]+$/.test(name)) {
      alert("영문으로 입력해주세요.");
    }
    return name.replace(/[^a-zA-Z]/g, "");
  };

  const onlyKorean = (name: string) => {
    // travelerName 정규식 (한글만 가능)
    return name.replace(/[^a-zA-Zㄱ-ㅣ가-힣]/g, "");
  };

  return (
    <div>
      <h3 className="pb-[8px]">{role}</h3>
      <div className="flex flex-col flex-wrap gap-y-[16px] p-[22px] border-[1px] border-sub-black">
        <div className="flex text-sub-black text-[14px] gap-[20px] shrink-0">
          <label htmlFor="travelerName">
            <span className="text-red-700">*</span>
            이름
          </label>
          <input
            className="flex"
            type="text"
            id="travelerName"
            placeholder="이름을 입력하세요"
            value={info.travelerName}
            onChange={(e) =>
              handleInput(e.target.id, onlyKorean(e.target.value))
            }
          />
        </div>
        <div className="flex text-sub-black text-[14px] gap-[20px]">
          <label htmlFor="enFirstName" className="shrink-0">
            <span className="text-red-700">*</span>영문이름
          </label>
          <div className="shrink-0 gap-[10px] flex">
            <label htmlFor="enFirstName">성:</label>
            <input
              id="enFirstName"
              placeholder="영문 성을 입력하세요"
              value={info.enFirstName}
              onChange={(e) =>
                handleInput(e.target.id, onlyEnglish(e.target.value))
              }
            />
          </div>
          <div className="shrink-0 gap-[10px] flex">
            <label htmlFor="enLastName">이름:</label>
            <input
              id="enLastName"
              placeholder="영문 이름을 입력하세요"
              value={info.enLastName}
              onChange={(e) =>
                handleInput(e.target.id, onlyEnglish(e.target.value))
              }
            />
          </div>
        </div>
        <div className="flex text-sub-black text-[14px] gap-[30px]">
          <label>
            <span className="text-red-700">*</span>성별
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              name={`${role}_gender`}
              id={`${role}_남`}
              value={"남"}
              checked={info.gender === "남"}
              onChange={(e) => handleInput("gender", e.target.value)}
            />
            <label htmlFor={`${role}_남`} className="pl-[5px]">
              남
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name={`${role}_gender`}
              id={`${role}_여`}
              value={"여"}
              checked={info.gender === "여"}
              onChange={(e) => handleInput("gender", e.target.value)}
            />
            <label htmlFor={`${role}_여`} className="pl-[5px]">
              여
            </label>
          </div>
        </div>
        <div className="flex text-sub-black text-[14px] gap-[20px]">
          <label htmlFor="birth" className="min-w-[55px]">
            <span className="text-red-700">*</span>
            생년월일
          </label>
          <input
            type="date"
            id="birth"
            className=""
            onChange={(e) => handleInput(e.target.id, e.target.value)}
          />
        </div>

        <div className="flex text-sub-black text-[14px] justify-between gap-[10px]">
          <label htmlFor="phoneNumber">
            {isRepresentative && <span className="text-red-700">*</span>}
            휴대폰번호
          </label>
          <input
            className="flex grow"
            type="tell"
            id="phoneNumber"
            maxLength={13}
            placeholder="휴대폰번호를 입력하세요"
            value={info.phoneNumber}
            onChange={(e) =>
              handleInput(e.target.id, phoneNumberFormat(e.currentTarget.value))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TravelerInfoForm;
