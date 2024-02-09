import { useState } from "react";
import ScheduleBtn from "./ScheduleBtn";
import ProductListTable from "./ProductListTable";
import PackageInfo from "../common/PackageInfo";
import { productListData } from "../../constants/packagedata";

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
      <PackageInfo
        country={packageData.country}
        name={packageData.packageName}
        summary={packageData.summary}
        price={packageData.price}
        hashTag={packageData.hashTag}
        page="travelproduct"
      />
      <div className="flex flex-col items-center gap-[26px]">
        <ScheduleBtn
          showSchedule={showSchedule}
          handleScheduleBtn={handleScheduleBtn}
        />
        {showSchedule && <ProductListTable productList={productListData} />}
      </div>
    </section>
  );
};
export default PackageBox;
