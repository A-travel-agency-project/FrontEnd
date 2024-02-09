interface TitleNameProps {
  name: string;
  className: string;
}
const ManagerTitleBox = ({ name, className }: TitleNameProps) => {
  return (
    <div
      className={`bg-title-box px-5 py-3 w-36 flex justify-center ${className}`}
    >
      {name}
    </div>
  );
};

export default ManagerTitleBox;
