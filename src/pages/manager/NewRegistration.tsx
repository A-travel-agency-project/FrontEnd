import { useRef, useState } from "react";
import {
  country,
  packageThumbnailTitle1,
  packageThumbnailTitle2,
  packageTitle,
  registSubTitle,
  tagTitle,
} from "../../constants/data";
import UiEditor from "../../components/common/UiEditor";
import ManagerTitleBox from "../../components/Manager/ManagerTitleBox";
import MainManagerBtn from "../../components/Manager/MainManagerBtn";
import TagInput from "../../components/Manager/TagInput";
import PackageEditorList from "../../components/Manager/package/PackageEditorList";
import RegistSubInput from "../../components/Manager/RegistSubInput";
import axios from "axios";
import { useGetTags } from "../../api/useGetTags";
import { Editor } from "@toast-ui/react-editor";
interface CountryData {
  key: string;
  value: string;
}
interface DateProps {
  day: number;
  dayContent: string;
  hotel: string;
  meal: string;
  vehicle: string;
}
const NewRegistration = () => {
  const ref = useRef<Editor | null>(null);
  const [days, setDays] = useState<DateProps[]>([
    {
      day: 1,
      dayContent: "",
      hotel: "",
      meal: "",
      vehicle: "",
    },
  ]);
  console.log(days);
  const { tagsData } = useGetTags({
    params: "tags",
  });
  console.log(tagsData);
  // 호텔안내
  const [hotelInfo, setHotelInfo] = useState<string>("");
  // 지역정보
  const [regionInfo, setRegionInfo] = useState<string>("");
  // 여행약관
  const [term, setTerms] = useState<string>("");
  /* 태그 */
  // 테마 리스트
  const [themeList, setThemeList] = useState<string[]>([]);
  // 가족 리스트
  const [familyList, setFamilyList] = useState<string[]>([]);
  // 시기 리스트
  const [seasonList, setSeasonList] = useState<string[]>([]);
  // 비용 리스트
  const [priceList, setPriceList] = useState<string[]>([]);
  // 태그 onChange함수
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target;

    if (checked) {
      if (name === "themeList") {
        setThemeList((prev) => [...prev, value]);
      } else if (name === "familyList") {
        setFamilyList((prev) => [...prev, value]);
      } else if (name === "seasonList") {
        setSeasonList((prev) => [...prev, value]);
      } else if (name === "priceList") {
        setPriceList((prev) => [...prev, value]);
      }
    } else {
      if (name === "themeList") {
        setThemeList((prev) => prev.filter((item) => item !== value));
      } else if (name === "familyList") {
        setFamilyList((prev) => prev.filter((item) => item !== value));
      } else if (name === "seasonList") {
        setSeasonList((prev) => prev.filter((item) => item !== value));
      } else if (name === "priceList") {
        setPriceList((prev) => prev.filter((item) => item !== value));
      }
    }
  };

  /* 폼데이터 */
  const jsonData = {
    packageName: "프랑스위스 6박 7일",
    summary: "프랑스와 스위스를 오가는 힐링여행",
    period: 6,
    privacy: "비공개",
    countryName: "프랑스위스",
    themeList: themeList,
    familyList: familyList,
    priceList: priceList,
    seasonList: seasonList,
    hashTag: "쇼핑없어요 인생사진찍어요 여름방학",
    hotelInfoMd: hotelInfo,
    hotelInfoHtml: hotelInfo,
    regionInfoMd: regionInfo,
    regionInfoHtml: regionInfo,
    termsMd: term,
    termsHtml: term,
    scheduleList: days,
  };
  const formData = new FormData();
  formData.append(
    "data",
    new Blob([JSON.stringify(jsonData)], { type: "application/json" })
  );
  /* 폼데이터 post요청 */
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://13.124.147.192:8080/packages/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      });
  };
  // 날짜추가
  const addDay = () => {
    const newDay = days.length + 1;
    setDays([
      ...days,
      {
        day: newDay,
        dayContent: "",
        hotel: "",
        meal: "",
        vehicle: "",
      },
    ]);
  };
  // 날짜 삭제
  const removeDay = () => {
    if (days.length > 1) {
      const updatedDays = [...days.slice(0, -1)];
      setDays(updatedDays);
    }
  };
  // 에디터  + input 데이터 배열에 넣기
  const handleDayInputChange = (
    value: string | { dayContentMd: string; dayContentHtml: string },
    name: string,
    index: number
  ) => {
    const updatedDays = [...days];
    updatedDays[index] = { ...updatedDays[index], [name]: value };
    setDays(updatedDays);
  };

  return (
    <div className="w-full h-full">
      {/* 패키지 썸네일 */}
      <div className="w-full">
        <ManagerTitleBox name="패키지 썸네일" className="mb-2" />
        <div className="w-full flex">
          <div className="border px-6 py-4 w-[600px] mr-10">
            {packageThumbnailTitle1.map((el, index) => {
              return <MainManagerBtn className="mr-2" title={el} key={index} />;
            })}
          </div>
          <div className="border px-6 py-4 w-[600px]">
            {packageThumbnailTitle2.map((el, index) => {
              return <MainManagerBtn className="mr-2" title={el} key={index} />;
            })}
          </div>
        </div>
        <div className="w-full flex justify-center mb-20 mt-7">
          <button className="border px-4 py-2">확인</button>
        </div>
      </div>
      {/* 이름 요약 여행지 */}
      <h2>패키지 신규/수정 등록</h2>
      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <ManagerTitleBox
            className="border-y border-l border-black"
            name="패키지 이름"
          />
          <input className="border pl-5  border-black outline-none w-full flex items-center"></input>
        </div>
        <div className="flex w-full mb-3">
          <ManagerTitleBox
            className="border-l border-b border-black"
            name="패키지 요약"
          />
          <input className="pl-5 border-x border-b border-black outline-none w-full flex items-center"></input>
        </div>
        <div className="flex w-full mb-16">
          <div className="bg-title-box px-5 py-3 w-36">여행지</div>
          <select defaultValue="default" className="border border-black w-56">
            <option disabled value="default" hidden>
              전체 여행지
            </option>

            {country.map((el: CountryData) => {
              return <option value={el.key}>{el.value}</option>;
            })}
          </select>
        </div>
      </div>

      {/* 태그 */}
      <div className="flex flex-col w-full mb-36">
        <div className="flex w-full mb-9">
          <ManagerTitleBox name="태그" className="h-10 mr-10" />

          <div className="flex flex-col w-full">
            {Object.keys(tagsData).map((category, outerIndex) => {
              let customTitle = "";
              if (category === "themeList") {
                customTitle = "테마";
              } else if (category === "familyList") {
                customTitle = "구성원";
              } else if (category === "seasonList") {
                customTitle = "시기";
              } else if (category === "priceList") {
                customTitle = "비용";
              }
              return (
                <div key={outerIndex} className="flex items-center w-full mb-5">
                  <div className="whitespace-nowrap w-14">{customTitle}</div>
                  {tagsData[category].map((value, innerIndex) => (
                    <TagInput
                      id={value.tagId}
                      title={value.tagContent}
                      key={innerIndex}
                      category={category}
                      handleTagsChange={handleTagsChange}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <ManagerTitleBox name="자유태그" className="mr-10" />
          {/* 자유태그 input */}
          <input className="w-full outline-none border border-black" />
        </div>
      </div>
      {/* 일정안내 */}
      <form onSubmit={handleOnSubmit}>
        <div className="w-full">
          <h2 className="font-bold text-xl mb-4">일정 안내</h2>
          {days.map((day, index) => (
            <div className="flex w-full mb-20" key={index}>
              <div>
                <ManagerTitleBox
                  name={`${day.day}일차`}
                  className="border border-black mr-4"
                />
                {index > 0 && index === days.length - 1 && (
                  <div>
                    <button
                      className="bg-title-box px-5 py-3 w-36 flex justify-center border border-black"
                      onClick={removeDay}
                    >
                      삭제하기
                    </button>
                  </div>
                )}
                {index === days.length - 1 && (
                  <button
                    className="bg-title-box px-5 py-3 w-36 flex justify-center border border-black"
                    onClick={addDay}
                  >
                    +
                  </button>
                )}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex mb-4">
                  <div className="bg-title-box px-5 whitespace-nowrap">
                    제목
                  </div>
                  <input className="w-full outline-none border" required />
                </div>

                <UiEditor
                  editorRef={ref}
                  name={Object.keys(day)[1]}
                  index={index}
                  handleDayInputChange={handleDayInputChange}
                />
                {registSubTitle.map((el, idx) => {
                  return (
                    <RegistSubInput
                      key={idx}
                      title={el.title}
                      handleDayInputChange={handleDayInputChange}
                      index={index}
                      name={el.name}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div>
          {packageTitle.map((el, index) => {
            return (
              <PackageEditorList
                key={index}
                title={el}
                setHotelInfo={setHotelInfo}
                setRegionInfo={setRegionInfo}
                setTerms={setTerms}
              />
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full h-[1px] my-16 bg-black" />
          <button className="bg-title-box px-20 py-3 border border-black">
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRegistration;
