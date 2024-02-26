import React, { useRef } from "react";
import UiEditor from "../../common/UiEditor";

interface PackageEditorProps {
  title: string;
  setHotelInfo?: React.Dispatch<React.SetStateAction<string>>;
  setRegionInfo?: React.Dispatch<React.SetStateAction<string>>;
  setTerms?: React.Dispatch<React.SetStateAction<string>>;
}

const PackageEditorList = ({
  title,
  setHotelInfo,
  setRegionInfo,
  setTerms,
}: PackageEditorProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any | null>(null);
  const handleEditorChange = () => {
    const htmlContent = ref.current?.getInstance().getHTML();

    if (setHotelInfo) {
      setHotelInfo(htmlContent);
    }
    if (setRegionInfo) {
      setRegionInfo(htmlContent);
    }
    if (setTerms) {
      setTerms(htmlContent);
    }
  };
  return (
    <div className="w-full flex">
      <h2 className="font-bold text-xl mb-4 whitespace-nowrap mr-20">
        {title}
      </h2>
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <div className="flex mb-4">
            <div className="bg-title-box px-5 whitespace-nowrap">제목</div>
            <input className="w-full outline-none border" required />
          </div>
          <UiEditor
            editorRef={ref}
            title={title}
            onChange={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageEditorList;
