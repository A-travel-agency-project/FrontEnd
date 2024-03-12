import { useEffect, useState } from "react";
import { PriceInfoData, travelerInfo } from "../../types/reservation";
import SectionTitle from "./SectionTitle";
import TravelerInfoForm from "./TravelerInfoForm";

const TravelerInfo = ({
  priceInfo,
  handleInfoValid,
  handleCheck,
}: {
  priceInfo: PriceInfoData;
  handleInfoValid: (list: travelerInfo[]) => void;
  handleCheck: (id: string) => void;
}) => {
  const [travelerInfoList, setTravelerInfoList] = useState<travelerInfo[]>([]);
  const [infoCount, setInfoCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const travelerForms = [
    ...Array.from(
      { length: priceInfo["성인"].count - 1 },
      (_, i) => `성인 ${i + 1}`
    ),
    ...Array.from(
      { length: priceInfo["아동"].count },
      (_, i) => `아동 ${i + 1}`
    ),
    ...Array.from(
      { length: priceInfo["유아"].count },
      (_, i) => `유아 ${i + 1}`
    ),
  ];

  const handleTravelerInfo = (index: number, info: travelerInfo) => {
    setTravelerInfoList((prev) => {
      const newList = [...prev];
      if (!newList[index]) {
        setInfoCount((prev) => prev + 1);
      }
      newList[index] = info;
      return newList;
    });
  };

  const handleChecked = (checked: boolean, id: string) => {
    console.log(checked);
    const requiredData = [
      "travelerName",
      "enFirstName",
      "enLastName",
      "gender",
      "birth",
    ];

    // 기본적인 필수 정보 존재 여부 확인
    const isAllValid = travelerInfoList.every((info) => {
      return requiredData.every(
        (field) => info[field as keyof travelerInfo] !== ""
      );
    });

    // 대표 1인의 핸드폰 번호 존재 여부 확인
    const isRepresenterValid =
      !travelerInfoList[0] || travelerInfoList[0].phoneNumber !== "";
    console.log(isAllValid);
    console.log(isRepresenterValid);
    console.log(priceInfo.totalCount);
    console.log(priceInfo.totalCount === infoCount);

    if (checked) {
      if (
        priceInfo.totalCount === infoCount &&
        isAllValid &&
        isRepresenterValid
      ) {
        handleInfoValid(travelerInfoList);
        setIsChecked(true);
        handleCheck(id);
      } else if (
        priceInfo.totalCount !== infoCount ||
        !isAllValid ||
        !isRepresenterValid
      ) {
        alert("필수 여행자정보를 모두 기입해주세요.");
        setIsChecked(false);
      }
    }
    if (!checked) {
      setIsChecked(!isChecked);
      handleCheck(id);
    }
  };

  useEffect(() => {
    console.log(travelerInfoList);
  }, [travelerInfoList]);

  return (
    <section className="flex flex-col w-[664px]">
      <div className="flex justify-between">
        <SectionTitle title="여행자 정보" />
        <div className="flex item-center">
          <input
            type="checkbox"
            id="travelerInfo"
            checked={isChecked}
            onChange={(e) => handleChecked(e.target.checked, e.target.id)}
          />
          <label htmlFor="travelerInfo" className="text-[14px] pl-[4px]">
            여행자 정보와 일치합니다.
          </label>
        </div>
      </div>
      <div className="p-[16px] flex flex-col gap-[40px]">
        <TravelerInfoForm
          role="대표1인"
          isRepresentative={true}
          handleTravelerInfo={handleTravelerInfo}
          listIndex={0}
        />
        {travelerForms.map((age, index) => (
          <TravelerInfoForm
            key={`${age}`}
            role={`${age}`}
            isRepresentative={false}
            handleTravelerInfo={handleTravelerInfo}
            listIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
};
export default TravelerInfo;
