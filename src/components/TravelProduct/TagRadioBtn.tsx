type listProp = {
  id: string;
  dropdown: string;
  checkbox: string;
};

type RadioBtnProps = {
  list: listProp[];
};

const TagRadioBtn = ({ list }: RadioBtnProps) => {
  return (
    <div className="flex flex-col text-sub-black text-[14px] justify-center gap-[7px] font-light">
      {list.map((item) => (
        <div className="flex" key={item.id}>
          <input type="checkbox" id={item.id} className="mb-[2px] ml-[2px]" />
          <label key={item.id} htmlFor={item.id} className="px-[4px]">
            {item.checkbox}
          </label>
        </div>
      ))}
    </div>
  );
};
export default TagRadioBtn;
