import React from "react";

interface SelectComponentProps {
  options: string[];
  value: string | null;
  onChange: (value: string) => void;
  disabledOption?: string;
  handlePrivacyClick?: () => void;
  setChangeActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PackageSelect = ({
  options,
  onChange,
  value,
  disabledOption,
  setChangeActive,
}: SelectComponentProps) => {
  return (
    <>
      <select
        className="border  border-black px-4 outline-none"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          onChange(e.target.value);
          setChangeActive && setChangeActive(true);
        }}
        value={value || ""}
      >
        {disabledOption && (
          <option disabled value="">
            {disabledOption}
          </option>
        )}
        {options.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default PackageSelect;
