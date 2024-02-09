import { PackageInfoData } from "../../constants/productdata";
import PackageInfo from "../common/PackageInfo";
import PackageIcon from "./PackageIcon";
import Thumnails from "./Thumnails";

type PackageDetailProps = {
  info: PackageInfoData;
};

const PackageDetail = ({ info }: PackageDetailProps) => {
  return (
    <>
      <div className="w-[750px] flex gap-[33px] mt-[38px]  border-b-[1px] border-main-color pb-[12px]">
        <Thumnails list={info.thumbnail_list} />
        <div className="flex flex-col mt-[8px]">
          <PackageInfo
            country={info.country}
            name={info.package_name}
            summary={info.summary}
            price={info.price}
            hashTag={info.hash_tag}
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
