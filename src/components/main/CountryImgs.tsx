import MapPin from "/public/map_pin.svg";
import { COUNTRY_IMG_DATA, COUNTRY_NAME } from "../../constants/mapdata";
import { useNavigate } from "react-router-dom";

const CountryImgs = ({
  handleMouseOver,
  handleMouseOut,
  country,
  labelStyle,
  signatureStyle,
  containerStyle,
  islabelFirst,
  showImg,
}: {
  handleMouseOver: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseOut: () => void;
  country: string;
  labelStyle?: string;
  signatureStyle?: string;
  containerStyle?: string;
  islabelFirst?: boolean;
  showImg: string | null;
}) => {
  const navigate = useNavigate();
  const handleCountryClick = () => {
    navigate(
      `/travelproduct/${COUNTRY_NAME[country as keyof typeof COUNTRY_NAME]}`
    );
  };
  return (
    <>
      <div
        className={`${containerStyle} flex items-center gap-[2px] absolute z-10 cursor-pointer p-[4px]`}
        aria-label={country}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleCountryClick}
      >
        {islabelFirst && (
          <img
            src={
              COUNTRY_IMG_DATA[country as keyof typeof COUNTRY_IMG_DATA].label
            }
            alt={`${country}Label`}
            className={`${labelStyle}`}
          />
        )}
        <img src={MapPin} alt={`${country} map pin`} className="w-fit h-fit" />
        {!islabelFirst && (
          <img
            src={
              COUNTRY_IMG_DATA[country as keyof typeof COUNTRY_IMG_DATA].label
            }
            alt={`${country}Label`}
            className={`${labelStyle}`}
          />
        )}
      </div>
      <img
        src={
          COUNTRY_IMG_DATA[country as keyof typeof COUNTRY_IMG_DATA].signature
        }
        alt={`${country}Signature`}
        className={`absolute ${signatureStyle} ${
          showImg !== country && "hidden"
        }`}
      />
    </>
  );
};
export default CountryImgs;
