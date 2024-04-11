interface LoginSignUpProps {
  label: string;
  onClick?: () => void;
}

const LoginSignUpBtn = ({ label, onClick }: LoginSignUpProps) => {
  return (
    <button
      className="bg-main-color w-full rounded-full py-3 mt-5 max-xsm:py-[10px]"
      onClick={onClick}
    >
      <span className="text-white">{label}</span>
    </button>
  );
};

export default LoginSignUpBtn;
