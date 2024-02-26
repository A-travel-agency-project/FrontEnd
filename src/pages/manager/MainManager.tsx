import React, { useState } from "react";
import MainManagerBtn from "../../components/Manager/MainManagerBtn";
import { fileTitle } from "../../constants/data";
import MainTitle from "../../components/Manager/ManagerTitle";
import axios from "axios";

const MainManager = () => {
  const [selectedFiles, setSelectedFiles] = useState<Record<string, File>>({});

  const handleFileChange = (title: string, file: File) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [title]: file,
    }));
  };
  const handleBannerClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(formData);

    for (const title in selectedFiles) {
      if (
        Object.hasOwnProperty.call(selectedFiles, title) &&
        selectedFiles[title]
      ) {
        formData.append(title, selectedFiles[title] as File);
      }
    }

    try {
      const response = await axios.post(
        "http://13.124.147.192:8080/images/banners",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center pl-36 h-full">
      <MainTitle title={"메인관리-배너수정"} />
      <form onSubmit={handleBannerClick}>
        <div className="border p-2 w-[600px]">
          {fileTitle.map((el, index) => {
            return (
              <MainManagerBtn
                title={el}
                key={index}
                onFileChange={handleFileChange}
                selectedFiles={selectedFiles}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center">
          <button
            disabled={Object.keys(selectedFiles).length === 3 ? false : true}
            className="flex items-center justify-center border w-[32px] whitespace-nowrap px-10 py-1 mt-2 disabled:bg-gray-200 disabled:text-gray-500 hover:bg-main-color hover:text-white"
          >
            <span>확인</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainManager;
