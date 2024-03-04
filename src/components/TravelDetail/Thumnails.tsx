import { useState } from "react";
import { Img } from "../../types/img";

const Thumnails = ({ list }: { list: Img[] }) => {
  const [showImg, setShowImg] = useState(list[0].imageUrl);
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
                src={item.imageUrl}
                alt="여행지 이미지"
                className="w-[80px] h-[54px] rounded-[13px] object-cover"
                onClick={() => handleImg(item.imageUrl)}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Thumnails;
