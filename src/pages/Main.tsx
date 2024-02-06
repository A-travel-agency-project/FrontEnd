import Banner from "../components/main/Banner";
import BlogBox from "../components/main/BlogBox";
import FilterBox from "../components/main/FilterBox";
import Map from "../components/main/Map";
import SectionTitle from "../components/main/SectionTitle";

const Main = () => {
  return (
    <div className="py-[216px] w-full h-auto flex flex-col items-center gap-[48px]">
      <Banner></Banner>
      <section className="flex items-start w-[850px] gap-[24px] flex-col">
        <SectionTitle title={"어디로 가볼까요?"} />
        <Map />
      </section>
      <section className="flex items-start w-[850px] gap-[8px] flex-col">
        <SectionTitle title={"어떤 여행을 희망하세요?"} />
        <FilterBox />
      </section>
      <section className="flex items-start w-[850px] gap-[20px] flex-col">
        <SectionTitle title={"여행박사의 mom편한 여행 꿀팁"} />
        <BlogBox />
      </section>
    </div>
  );
};

export default Main;
