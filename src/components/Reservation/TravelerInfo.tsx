import { PriceInfoData, travelerInfo } from "../../types/reservation";
import SectionTitle from "./SectionTitle";
import TravelerInfoForm from "./TravelerInfoForm";
import { User } from "../../types/user";

const TravelerInfo = ({
  priceInfo,
  handleTravelerInfo,
  userInfo,
  startDate,
  handleChangeAge,
}: {
  priceInfo: PriceInfoData;
  handleTravelerInfo: (index: number, info: travelerInfo) => void;
  userInfo: User;
  startDate: string;
  handleChangeAge: (pickedAge: string, realAge: string) => void;
}) => {
  const travelerForms = [
    ...Array.from({ length: priceInfo["성인"].count - 1 }, (_, i) => `성인`),
    ...Array.from({ length: priceInfo["아동"].count }, (_, i) => `아동`),
    ...Array.from({ length: priceInfo["유아"].count }, (_, i) => `유아`),
  ];

  return (
    <section className="flex flex-col w-[664px]">
      <div className="flex justify-between">
        <SectionTitle title="여행자 정보" />
      </div>
      <div className="p-[16px] flex flex-col gap-[40px]">
        <TravelerInfoForm
          role="대표1인"
          isRepresentative={true}
          handleTravelerInfo={handleTravelerInfo}
          listIndex={0}
          userInfo={userInfo}
          startDate={startDate}
          handleChangeAge={handleChangeAge}
        />
        {travelerForms.map((age, index) => (
          <TravelerInfoForm
            key={`${age}${index}`}
            role={`${age}`}
            isRepresentative={false}
            handleTravelerInfo={handleTravelerInfo}
            listIndex={index + 1}
            startDate={startDate}
            handleChangeAge={handleChangeAge}
          />
        ))}
      </div>
    </section>
  );
};
export default TravelerInfo;
