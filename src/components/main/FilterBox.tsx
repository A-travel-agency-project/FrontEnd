import FilterDropdown from "./FilterDropdown";

const FilterBox = ({ name = "우리" }) => {
  type MemberType = {
    dropdown: string;
    radio: string;
  };

  const MEMBER_TYPE: MemberType[] = [
    { dropdown: "중학생", radio: "중학생 사춘기 아들이 있어요" },
    { dropdown: "유치원생", radio: "유치원 아가들이에요" },
    { dropdown: "형제", radio: "사이좋은 형제가 있어요" },
    { dropdown: "자매", radio: "이쁜 자매가 있어요" },
  ];

  return (
    <div className="w-[850px] justify-between h-[320px] rounded-[40px] flex px-[35px] py-[35px] text-sub-black text-[20px] border-main-color border-[2px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-row gap-[24px]">
          <span>{name}는</span>
          <FilterDropdown list={MEMBER_TYPE} />
          <span>입니다.</span>
        </div>
        <div className="flex flex-row gap-[24px]">
          <span>아이들은</span>
          <FilterDropdown list={MEMBER_TYPE} />
          <span>입니다.</span>
        </div>
        <div className="flex flex-row gap-[24px]">
          <span>특별히</span>
          <FilterDropdown list={MEMBER_TYPE} />
          <span>으로</span>
        </div>
        <div className="flex flex-row gap-[24px]">
          <FilterDropdown list={MEMBER_TYPE} />
          <span>시기에</span>
        </div>
        <span>추억에 남는 여행을 떠나려고 합니다 :)</span>
      </div>
      <div className="w-[327px] h-[250px] rounded-[40px] overflow-hidden bg-main-color">
        img
      </div>
    </div>
  );
};
export default FilterBox;
