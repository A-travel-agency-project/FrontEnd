import "./TravelPlaceBtns.css";

const TravelPlaceBtns = () => {
  const TRAVEL_PLACES = [
    "동유럽",
    "프랑스위스",
    "스페인",
    "이탈리아",
    "호주",
    "뉴질랜드",
    "대만",
    "일본",
    "동남아",
  ];

  return (
    <div className=" w-full max-w-[775px] overflow-hidden grid grid-cols-5 box-border border-[1px] border-main-color rounded-[25px] my-[33px]">
      {TRAVEL_PLACES.map((place) => (
        <button
          type="button"
          className=" placeBtn box-border bg-transparent p-[10px]
        cursor-pointer transition-colors duration-300 active:bg-main-color active:text-white
        hover:bg-main-color hover:text-white border-r-[1px] border-main-color border-b-[1px]"
        >
          {place}
        </button>
      ))}
    </div>
  );
};
export default TravelPlaceBtns;
