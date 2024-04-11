import { ChangeEvent } from "react";
import SignUpCheck from "./\bSignUpCheck";
import SignUpPopup from "./SignUpPopup";

interface SignUpInputProps {
  placeholder: string;
  title: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isValid?: string | boolean | undefined;
  length?: number | undefined;
  type: string;
  className?: string;
  message?: string;
  min?: number;
  readonly?: boolean;
  inputClass?: string;
  padding?: boolean;
  checkIconStyle?: string;
  cancelIconStyle?: string;
}

const SignUpInput = ({
  placeholder,
  title,
  onChange,
  name,
  value,
  isValid,
  length,
  type,
  className,
  message,
  min,
  readonly,
  inputClass,
  padding,
  checkIconStyle,
  cancelIconStyle,
}: SignUpInputProps) => {
  return (
    <div
      className={`flex justify-between w-full items-center relative ${
        padding ? className : ""
      } max-xsm:w-[300px]`}
    >
      {title && (
        <div className="whitespace-nowrap max-xsm:text-[13px]">{title}</div>
      )}
      <input
        placeholder={placeholder}
        value={value}
        className={`${inputClass} outline-none border font-medium border-main-color w-3/4 text-sm rounded-full py-3 pl-7 mb-[5px] 
        max-xsm:max-w-[204px] max-xsm:h-[36px] placeholder:max-xsm:text-[11px]`}
        onChange={onChange}
        name={name}
        type={type}
        min={min && min}
        readOnly={readonly ? true : false}
      />
      {isValid ? (
        <SignUpCheck iconStyle={checkIconStyle} />
      ) : (
        length !== undefined &&
        length > 0 && (
          <SignUpPopup message={message} iconStyle={cancelIconStyle} />
        )
      )}
    </div>
  );
};

export default SignUpInput;
