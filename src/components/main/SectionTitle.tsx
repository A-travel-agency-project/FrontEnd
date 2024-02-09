type SectionTitleProps = {
  title: string;
};
const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="pl-[8px]">
      <hr className="border-main-color w-[50px] border-[2px]" />
      <h2 className="text-main-color text-[20px] font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
