import { useState } from "react";
import { ThumbnailListData } from "../../constants/productdata";

type ThumnailsProps = {
  list: ThumbnailListData;
};

const Thumnails = ({ list }: ThumnailsProps) => {
  const [showImg, setShowImg] = useState(list[0].image_url);
  const handleImg = (url: string) => {
    setShowImg(() => url);
  };
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <img
          src={showImg}
          className="w-[434px] h-[239px] rounded-[40px] object-cover "
        />

        <div className="flex gap-[9px]">
          {list.map((item, idx) => (
            <button key={idx}>
              <img
                src={item.image_url}
                alt="여행지 이미지"
                className="w-[80px] h-[54px] rounded-[13px] object-cover"
                onClick={() => handleImg(item.image_url)}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Thumnails;
