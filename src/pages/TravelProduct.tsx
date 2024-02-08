import PackageBox from "../components/TravelProduct/PackageBox";
import TagBtnGroup from "../components/TravelProduct/TagBtnGroup";
import TravelPlaceBtns from "../components/TravelProduct/TravelPlaceBtns";
import { packagedata } from "../constants/packagedata";

const TravelProduct = () => {
  return (
    <div className="py-[216px] w-full h-auto flex flex-row gap-[1%] justify-center">
      <TagBtnGroup name="우리" />
      <div className="flex flex-col justify-center grow max-w-[850px] mr-[12%] items-center">
        <TravelPlaceBtns />
        <div className="flex flex-col gap-[52px]">
          {packagedata.map((data) => (
            <PackageBox packageData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelProduct;
