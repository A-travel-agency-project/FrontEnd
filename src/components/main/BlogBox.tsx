import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BlogBox = () => {
  const data = [
    {
      title: "Lorem Ipsum",
      contents:
        "모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.",
      createdAt: "2023-12-11",
      url: "",
    },
    {
      title: "여행가고싶다일본여행가고싶다디즈니랜드유니버셜스튜디오",
      contents: "Lorem ipsum dolor sit amet",
      createdAt: "2023-12-11",
      url: "",
    },
    {
      title: "Lorem Ipsum",
      contents: "Lorem ipsum dolor sit amet",
      createdAt: "2023-12-11",
      url: "",
    },
    {
      title: "Lorem Ipsum",
      contents: "Lorem ipsum dolor sit amet",
      createdAt: "2023-12-11",
      url: "",
    },
    {
      title: "Lorem Ipsum",
      contents: "Lorem ipsum dolor sit amet",
      createdAt: "2023-12-11",
      url: "",
    },
    {
      title: "Lorem Ipsum",
      contents: "Lorem ipsum dolor sit amet",
      createdAt: "2023-12-11",
      url: "",
    },
    {
      title: "Lorem Ipsum",
      contents: "Lorem ipsum dolor sit amet",
      createdAt: "2023-12-11",
      url: "",
    },
  ];
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="overflow-hidden w-[850px] px-[20px] py-[16px] h-[196px] bg-[#F5F5F5]"
    >
      <ul>
        {data.map((item) => (
          <li>
            <SwiperSlide className=" bg-white border-sub-gray border-[1px]">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h2 className="p-[10px] justify-center items-center flex border-b-[1px] border-sub-gray h-[56px] overflow-hidden">
                  {blogPostEllipsis(item.title, "title")}
                </h2>
                <div className="flex flex-col p-[10px] items-center gap-[6px]">
                  <p className="text-[10px] text-sub-gray overflow-hidden">
                    {blogPostEllipsis(item.contents, "contents")}
                  </p>
                  <span className="self-end text-[11px]">{item.createdAt}</span>
                </div>
              </a>
            </SwiperSlide>
          </li>
        ))}
      </ul>
    </Swiper>
  );
};
export default BlogBox;

const blogPostEllipsis = (text: string, type: "title" | "contents"): string => {
  const cutNum = { title: 19, contents: 70 };
  if (text.length > cutNum[type]) {
    return `${text.substring(0, cutNum[type])}...`;
  }
  return text;
};
