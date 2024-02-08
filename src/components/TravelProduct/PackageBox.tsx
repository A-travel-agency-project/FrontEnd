import { useState } from "react";
import ScheduleBtn from "./ScheduleBtn";
import ScheduleTable from "./ScheduleTable";

type Thumbnail = {
  original_image_name: string;
  upload_image_name: string;
  image_path: string;
  image_url: string;
};

type PackageData = {
  packageId: number;
  packageName: string;
  summary: string;
  period: number;
  country: string;
  price: number;
  hashTag: string;
  thumbnailList: Thumbnail[];
};

type PackageBoxProps = {
  packageData: PackageData;
};

const PackageBox = ({ packageData }: PackageBoxProps) => {
  const [showSchedule, setShowSchedule] = useState(false);
  const handleScheduleBtn = () => {
    setShowSchedule((prev) => !prev);
  };

  const content = [
    {
      start_date: "2023-10-12T07:51:01",
      end_date: "2023-10-18T07:51:01",
      remaining_quantity: 50,
      airline: "대한항공12",
      price: 50000000,
      product_state: "RESERVATION_AVAILABLE",
    },
    {
      start_date: "2023-10-12T07:51:01",
      end_date: "2023-10-18T07:51:01",
      remaining_quantity: 50,
      airline: "대한항공12",
      price: 50000000,
      product_state: "RESERVATION_AVAILABLE",
    },
    {
      start_date: "2023-10-12T07:51:01",
      end_date: "2023-10-18T07:51:01",
      remaining_quantity: 50,
      airline: "대한항공12",
      price: 50000000,
      product_state: "RESERVATION_AVAILABLE",
    },
    {
      start_date: "2023-10-12T07:51:01",
      end_date: "2023-10-18T07:51:01",
      remaining_quantity: 50,
      airline: "대한항공12",
      price: 50000000,
      product_state: "RESERVATION_AVAILABLE",
    },
    {
      start_date: "2023-10-12T07:51:01",
      end_date: "2023-10-18T07:51:01",
      remaining_quantity: 50,
      airline: "대한항공12",
      price: 50000000,
      product_state: "RESERVATION_AVAILABLE",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-[20px] w-[755px]">
      <h1 className="text-main-color text-[20px]">
        <strong>{packageData.country}</strong> 지역에서 우리 아이와 mom편한 여행
        어떠세요?
      </h1>
      <div className="w-[755px] h-[400px] rounded-[40px] overflow-hidden">
        <img
          src={packageData.thumbnailList[0].image_url}
          alt={packageData.thumbnailList[0].original_image_name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="text-[20px]">{packageData.packageName}</span>
          <span className="text-[14px] font-black">{packageData.summary}</span>
          <div className="flex items-start">
            <span className="text-[10px] gap-[6px]">최저가</span>
            <span className="text-[20px]">{packageData.price}원~</span>
          </div>
        </div>
        <div>
          {packageData.hashTag.split(" ").map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-[26px]">
        <ScheduleBtn
          showSchedule={showSchedule}
          handleScheduleBtn={handleScheduleBtn}
        />
        {showSchedule && <ScheduleTable scheduleData={content} />}
      </div>
    </section>
  );
};
export default PackageBox;
