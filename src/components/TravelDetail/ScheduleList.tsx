import { ScheduleListData } from "../../constants/productdata";

type ScheduleListProps = {
  scheduleListData: ScheduleListData;
};

type ScheduleItemProps = {
  title?: string;
  content: string;
};

const ScheduleItem = ({ title, content }: ScheduleItemProps) => {
  return (
    <div className="flex gap-[56px] text-[14px]">
      {title && <span className="text-main-color w-[60px]">{title}</span>}
      <div>{content}</div>
    </div>
  );
};

const ScheduleList = ({ scheduleListData }: ScheduleListProps) => {
  return (
    <>
      {scheduleListData.map((list) => (
        <div
          key={`${list.day}일차`}
          className="border-main-color rounded-[40px] border-[1px] w-[765px] min-h-[200px] py-[25px] px-[45px]"
        >
          <ScheduleItem title={`${list.day}일차`} content={list.day_content} />
          <ScheduleItem title="숙소" content={list.hotel} />
          <ScheduleItem title="식사" content={list.meal} />
          <ScheduleItem title="이동방법" content={list.vehicle} />
        </div>
      ))}
    </>
  );
};
export default ScheduleList;
