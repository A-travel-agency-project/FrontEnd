type listProp = {
  dropdown: string;
  radio: string;
};

type DropdownProps = {
  list: listProp[];
};

const FilterDropdown = ({ list }: DropdownProps) => {
  return (
    <div className="border-b-[2px] border-main-color  px-[30px]">
      <select>
        {list.map((member) => (
          <option key={member.dropdown} value={member.dropdown}>
            {member.dropdown}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
