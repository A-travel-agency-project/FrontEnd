import { Package } from "../../types/package";
import PackageInfo from "../common/PackageInfo";
import PackageIcon from "./PackageIcon";
import Thumnails from "./Thumnails";

const PackageDetail = ({ info }: { info: Package }) => {
  return (
    <>
      <div className="w-[750px] flex gap-[33px] mt-[38px]  border-b-[1px] border-main-color pb-[12px]">
        <Thumnails list={info.thumbnailList ?? []} />
        <div className="flex flex-col mt-[8px]">
          <PackageInfo
            country={info.country ?? info.countryName ?? ""}
            name={info.packageName}
            summary={info.summary}
            price={info.price}
            hashTag={info.hashTag}
            page="traveldetail"
          />
          <PackageIcon />
          <div className="flex gap-[7px] text-center">
            <span className="w-[68px] py-[6px] text-[12px] bg-main-color rounded-[12px] ">
              출발확정
            </span>
            <span className="w-[68px] py-[6px] text-[12px] bg-main-color rounded-[12px] ">
              투어확정
            </span>
            <span className="w-[68px] py-[6px] text-[12px] bg-main-color rounded-[12px] ">
              예약가능
            </span>
            <span className="w-[68px] py-[6px] text-[12px] bg-main-color rounded-[12px] ">
              예약마감
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PackageDetail;
