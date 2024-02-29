type listProp = {
  id: string;
  dropdown: string;
  checkbox: string;
};

type TagBtnProps = {
  list: listProp[];
  tagStyle?: string;
};

const TagBtn = ({ list, tagStyle = "" }: TagBtnProps) => {
  return (
    <div
      className={`flex text-sub-black text-[14px] justify-center gap-[7px] font-light ${tagStyle}`}
    >
      {list.map((item) => (
        <div className="flex" key={item.id}>
          <input
            type="checkbox"
            id={item.dropdown}
            className="mb-[2px] ml-[2px]"
          />
          <label htmlFor={item.dropdown} className="px-[4px]">
            {item.checkbox}
          </label>
        </div>
      ))}
    </div>
  );
};
export default TagBtn;
