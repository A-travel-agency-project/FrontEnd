const CustomRadioBtn = ({
  label,
  id,
  handleInput,
  checked,
  disabled,
}: {
  label: string;
  id: string;
  handleInput: (id: string, value: string) => void;
  checked: boolean;
  disabled?: boolean;
}) => {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={!disabled ? () => handleInput(id, label) : undefined}
    >
      <div
        className={`border-[1px] border-sub-black rounded-[9999px] 
                w-[13px] h-[13px] flex justify-center items-center
                ${disabled && "cursor-default"} ${
          checked && "border-[#007aff]"
        }`}
      >
        {checked && (
          <div className="rounded-[9999px] w-[8px] h-[8px] bg-[#007aff]" />
        )}
      </div>
      <span className={`pl-[5px]`}>{label}</span>
    </div>
  );
};
export default CustomRadioBtn;
