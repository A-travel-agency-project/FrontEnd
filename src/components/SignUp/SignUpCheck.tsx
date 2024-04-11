const SignUpCheck = ({ iconStyle }: { iconStyle?: string }) => {
  return (
    <div
      className={`flex justify-center items-center absolute -right-7 ${iconStyle}`}
    >
      <img src="/icon_check.svg" className="w-5 h-5" />
    </div>
  );
};

export default SignUpCheck;
