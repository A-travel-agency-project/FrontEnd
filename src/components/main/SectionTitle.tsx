type SectionTitleProps = {
  title: string;
  padding?: boolean;
};
const SectionTitle = ({ title, padding }: SectionTitleProps) => {
  return (
    <div className={`${!padding ? "pl-[8px]" : ""} flex flex-col self-start`}>
      <hr className="border-main-color w-[50px] border-[2px]" />
      <h2 className="text-main-color text-[20px] font-bold max-xsm:font-medium max-xsm:text-sub-black max-xsm:text-[18px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
