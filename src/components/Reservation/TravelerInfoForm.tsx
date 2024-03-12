import { useState } from "react";
import { travelerInfo } from "../../types/reservation";
import { User } from "../../types/user";
import {
  calculateAge,
  checkValidDate,
  onlyEnglish,
  onlyKorean,
  phoneNumberFormat,
} from "../../utils/validationUtils";
import CustomRadioBtn from "./CustomRadionbtn";

const TravelerInfoForm = ({
  role,
  isRepresentative,
  handleTravelerInfo,
  listIndex,
  userInfo,
  startDate,
  handleChangeAge,
}: {
  role: string;
  isRepresentative: boolean;
  handleTravelerInfo: (index: number, info: travelerInfo) => void;
  listIndex: number;
  startDate: string;
  userInfo?: User;
  handleChangeAge: (pickedAge: string, realAge: string) => void;
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

  const [inputBirth, setInputBirth] = useState("");

  const [sameAsUserInfo, setSameAsUserInfo] = useState<boolean>(false);

  const [currentRole, setCurrentRole] = useState(role);

  const handleSameAsUser = (checked: boolean) => {
    if (checked && userInfo) {
      // 성인 여부 확인
      if (calculateAge(userInfo.birth, startDate) === "성인") {
        setSameAsUserInfo(true);
        const newInfo = {
          travelerName: userInfo.userName,
          enFirstName: userInfo.enFirstName,
          enLastName: userInfo.enLastName,
          gender: userInfo.gender,
          birth: userInfo.birth,
          phoneNumber: userInfo.phoneNumber,
          isRepresentative: isRepresentative,
        };
        setInfo(newInfo);
        setInputBirth(userInfo.birth);
        handleTravelerInfo(listIndex, newInfo);
      }
      if (calculateAge(userInfo.birth, startDate) !== "성인") {
        alert(WRONG_AGE_MESSAGES[role as keyof typeof WRONG_AGE_MESSAGES]);
        return;
      }
    }
    if (!checked) {
      setSameAsUserInfo(false);
      setInfo(() => {
        const newInfo = {
          travelerName: "",
          enFirstName: "",
          enLastName: "",
          gender: "남",
          birth: "",
          phoneNumber: "",
          isRepresentative: isRepresentative,
        };
        return newInfo;
      });
    }
  };

  const handleInput = (id: string, value: string) => {
    console.log(value);
    setInfo((prev) => {
      const updatedInfo = { ...prev, [id]: value };
      return updatedInfo;
    });
    handleTravelerInfo(listIndex, { ...info, [id]: value });
  };

  const handleBirth = (id: string, date: string) => {
    const pickedRole = currentRole === "대표1인" ? "성인" : currentRole;
    setInputBirth(date);
    if (date.length < 10) return;
    if (checkValidDate(date)) {
      const realRole = calculateAge(date, startDate);
      if (realRole !== pickedRole) {
        if (role === "대표1인") {
          alert(WRONG_AGE_MESSAGES[role]);
          setInputBirth("");
        } else {
          const changeAge = confirm(WRONG_AGE_MESSAGES[realRole]);
          if (changeAge) {
            handleChangeAge(role, realRole);
            setCurrentRole(realRole);
          } else {
            setInputBirth("");
          }
        }
      } else if (realRole === pickedRole) {
        setInfo((prev) => {
          const updatedInfo = { ...prev, [id]: date };
          return updatedInfo;
        });
        handleTravelerInfo(listIndex, { ...info, [id]: date });
      }
    }
    if (!checkValidDate(date)) {
      alert("유효한 생년월일이 아닙니다.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="pb-[8px]">{currentRole}</h3>
        {role === "대표1인" && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="travelerInfo"
              checked={sameAsUserInfo}
              onChange={(e) => handleSameAsUser(e.target.checked)}
            />
            <label htmlFor="travelerInfo" className="text-[14px] pl-[4px]">
              예약자 정보와 일치합니다.
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-wrap gap-y-[16px] p-[22px] border-[1px] border-sub-black">
        <div className="flex text-sub-black text-[14px] gap-[20px] shrink-0">
          <label htmlFor="travelerName">
            <span className="text-red-700">*</span>
            이름
          </label>
          <input
            className={`flex disabled:bg-transparent`}
            type="text"
            id="travelerName"
            placeholder="이름을 입력하세요"
            value={info.travelerName}
            onChange={(e) =>
              handleInput(e.target.id, onlyKorean(e.target.value))
            }
            disabled={sameAsUserInfo}
          />
        </div>
        <div className="flex text-sub-black text-[14px] gap-[20px]">
          <label htmlFor="enFirstName" className="shrink-0">
            <span className="text-red-700">*</span>영문이름
          </label>
          <div className="shrink-0 gap-[10px] flex">
            <label htmlFor="enFirstName">성:</label>
            <input
              className="disabled:bg-transparent"
              id="enFirstName"
              placeholder="영문 성을 입력하세요"
              value={info.enFirstName}
              onChange={(e) =>
                handleInput(e.target.id, onlyEnglish(e.target.value))
              }
              disabled={sameAsUserInfo}
            />
          </div>
          <div className="shrink-0 gap-[10px] flex">
            <label htmlFor="enLastName">이름:</label>
            <input
              className="disabled:bg-transparent"
              id="enLastName"
              placeholder="영문 이름을 입력하세요"
              value={info.enLastName}
              onChange={(e) =>
                handleInput(e.target.id, onlyEnglish(e.target.value))
              }
              disabled={sameAsUserInfo}
            />
          </div>
        </div>
        <div className="flex text-sub-black text-[14px] gap-[30px]">
          <label>
            <span className="text-red-700">*</span>성별
          </label>
          <CustomRadioBtn
            label="남"
            id="gender"
            checked={info.gender === "남"}
            handleInput={handleInput}
            disabled={sameAsUserInfo}
          />
          <CustomRadioBtn
            label="여"
            id="gender"
            checked={info.gender === "여"}
            handleInput={handleInput}
            disabled={sameAsUserInfo}
          />
        </div>
        <div className="flex text-sub-black text-[14px] gap-[20px]">
          <label htmlFor="birth" className="min-w-[55px]">
            <span className="text-red-700">*</span>
            생년월일
          </label>
          <input
            type="text"
            id="birth"
            placeholder="생년월일을 입력하세요"
            className="disabled:bg-transparent"
            value={inputBirth}
            onChange={(e) => handleBirth(e.target.id, e.target.value)}
            disabled={sameAsUserInfo}
          />
        </div>

        <div className="flex text-sub-black text-[14px] gap-[20px]">
          <label htmlFor="phoneNumber">
            {isRepresentative && <span className="text-red-700">*</span>}
            휴대폰번호
          </label>
          <input
            className="disabled:bg-transparent"
            type="tell"
            id="phoneNumber"
            maxLength={13}
            placeholder="휴대폰번호를 입력하세요"
            value={info.phoneNumber}
            onChange={(e) =>
              handleInput(e.target.id, phoneNumberFormat(e.currentTarget.value))
            }
            disabled={sameAsUserInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelerInfoForm;
