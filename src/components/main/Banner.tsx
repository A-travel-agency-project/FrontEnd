import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useGetBanners from "../../queries/imgs/useGetBanners";
import { useEffect, useState } from "react";

const Banner = () => {
  const [viewCategory, setViewCategory] = useState(
    window.innerWidth <= 375 ? "mobile" : "web"
  );
  const { data, isPending, isError, error } = useGetBanners(viewCategory);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setViewCategory("mobile");
      } else {
        setViewCategory("web");
      }
    };

    window.addEventListener("resize", handleResize);

    // 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(viewCategory);
  }, [viewCategory]);

  console.log(data);

  if (isPending) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return <div>에러 발생: {error?.message}</div>;
  }
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }
  return (
    <div className="max-w-[1280px] w-full max-xsm:h-[320px] h-[400px] ">
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
        {data.map((item) => (
          <SwiperSlide
            className={`overflow-hiddenw w-full h-[400px] max-xsm:h-[320px] bg-cover bg-no-repeat cursor-pointer bg-center`}
            key={item.imageUrl}
            data-imageurl={item.imageUrl}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <a href={item.link} className="h-full block" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
