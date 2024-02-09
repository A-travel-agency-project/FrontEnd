import { tagData } from "../../constants/tagdata";
import TagRadioBtn from "./TagRadioBtn";
const TagBtnGroup = ({ name = "우리" }) => {
  const handleSubmit = () => {
    console.log("태그처리");
  };
  return (
    <div className="my-[66px] min-w-[200px] text-main-color">
      <h1 className="text-[20px] font-bold">{name}와 함께</h1>
      {tagData.map((item) => (
        <div id={item.tag} key={item.tag} className="flex flex-col mb-[48px]">
          <h2 className="text-[14px] font-bold">{item.title}</h2>
          <TagRadioBtn list={item.list} />
        </div>
      ))}
      <button
        type="button"
        className="rounded-[15px] bg-main-color text-white text-[10px] text-center py-[4px] px-[20px] self-center"
        onClick={handleSubmit}
      >
        검색하기
      </button>
    </div>
  );
};
export default TagBtnGroup;
