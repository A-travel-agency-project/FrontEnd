import { FilterDropdownProps } from "../../types/tag";

const FilterDropdown = ({ list, id, handleClick }: FilterDropdownProps) => {
  return (
    <div className="border-b-[2px] border-main-color px-[30px]">
      <select onChange={(e) => handleClick(e.target.value, id)}>
        {list.map((data) => (
          <option key={data.tagContent} value={data.tagId} id={id}>
            {data.tagContent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
