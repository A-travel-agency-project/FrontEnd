import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const BannerImg = [
    { imgUrl: 1, url: "" },
    { imgUrl: 2, url: "" },
    { imgUrl: 3, url: "" },
  ];
  return (
    <div className="w-full max-w-[1280px] h-[400px]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        // style={{
        //   "--swiper-pagination-color": "#fff",
        // }}
        // tailwind에서는 사용 불가, css로 사용가능
      >
        {BannerImg.map((item) => (
          <SwiperSlide className="border-sub-black border-[1px] overflow-hiddenw w-full h-[400px]">
            <Link to={item.url}>
              <div>{item.imgUrl}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
