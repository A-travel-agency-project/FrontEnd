const OrderDetailBtn = ({
  label,
  handleClick,
  style,
  role,
  disabled,
}: {
  label: string;
  style?: string;
  handleClick: (role?: string) => void;
  role?: string;
  disabled: boolean;
}) => {
  const handleBtnClick = () => {
    if (disabled) {
      alert("현재 작성중인 정보를 완료한 후 다시 시도해 주세요.");
      return;
    }
    role ? handleClick(role) : handleClick();
  };

  return (
    <button
      className={`${
        style ? style : "py-[2px] px-[12px] text-[12px]"
      } flex border border-[#707070] bg-sub-black bg-opacity-[0.05] shrink-0 ${
        disabled &&
        "text-sub-gray cursor-default text-opacity-[0.8] border-opacity-[0.8]"
      }`}
      onClick={handleBtnClick}
    >
      {label}
    </button>
  );
};
export default OrderDetailBtn;
