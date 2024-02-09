interface MainTitleProps {
  title: string;
}

const ManagerTitle = ({ title }: MainTitleProps) => {
  return (
    <h2 className="text-left w-full text-main-color font-bold mb-9 text-xl">
      {title}
    </h2>
  );
};

export default ManagerTitle;
