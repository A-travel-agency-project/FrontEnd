import WorldMap from "/public/worldmap.svg";
import { useState } from "react";
import CountryImgs from "./CountryImgs";
import { useRecoilValue } from "recoil";
import { viewSize } from "../../atom/atom";
import { COUNTRY_INFO_IMG_DATA } from "../../constants/mapdata";

const Map = () => {
  const viewSizeState = useRecoilValue(viewSize);
  const [showImg, setShowImg] = useState<string | null>(null);
  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    const ariaLabel = event.currentTarget.getAttribute("aria-label");
    console.log("aria-label:", ariaLabel);
    setShowImg(() => ariaLabel);
  };
  const handleMouseOut = () => {
    setShowImg(null);
  };

  return (
    <div
      className="w-[850px] h-[425px] bg-[#FFE2B4] rounded-[40px] border border-dashed border-main-color
    max-xsm:max-w-[342px] max-xsm:h-[217px] max-xsm:w-full flex justify-center items-center relative"
    >
      <img src={WorldMap} alt="worldmap" className="pb-[28px]" />
      <CountryImgs
        showImg={showImg}
        country="australia"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[67%] right-[19.8%]"
        containerStyle="top-[68%] right-[17.5%] flex-col"
      />
      <CountryImgs
        showImg={showImg}
        country="easternEurope"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[16%] right-[28.5%]"
        containerStyle="top-[26.5%] right-[31%]"
      />
      <CountryImgs
        showImg={showImg}
        country="franswiss"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[19.5%] right-[40%]"
        containerStyle="top-[29.5%] right-[40%]"
      />
      <CountryImgs
        showImg={showImg}
        country="italy"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[35%] right-[38.3%]"
        containerStyle="top-[36.3%] right-[44.2%] flex-col"
      />
      <CountryImgs
        showImg={showImg}
        country="japan"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[32.3%] right-[10%]"
        containerStyle="top-[38.8%] right-[14%]"
      />
      <CountryImgs
        showImg={showImg}
        country="newzealand"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[64.5%] right-[2.5%]"
        containerStyle="top-[76.5%] right-[2.5%]"
      />
      <CountryImgs
        showImg={showImg}
        country="southeastAsia"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[49.3%] right-[13.3%]"
        containerStyle="top-[56%] right-[18%]"
      />
      <CountryImgs
        showImg={showImg}
        country="spain"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[26.5%] right-[59.8%]"
        containerStyle="top-[38.5%] right-[52.2%]"
        islabelFirst={true}
      />
      <CountryImgs
        showImg={showImg}
        country="taiwan"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        signatureStyle="top-[32%] right-[24%]"
        containerStyle="top-[43.8%] right-[21.8%]"
        islabelFirst={true}
      />
      {showImg !== null && (
        <img
          src={
            viewSizeState === "web"
              ? COUNTRY_INFO_IMG_DATA[
                  showImg as keyof typeof COUNTRY_INFO_IMG_DATA
                ]?.web
              : COUNTRY_INFO_IMG_DATA[
                  showImg as keyof typeof COUNTRY_INFO_IMG_DATA
                ]?.mobile
          }
          alt="country info"
          className="absolute z-20 bottom-[1%]"
        />
      )}
    </div>
  );
};
export default Map;
