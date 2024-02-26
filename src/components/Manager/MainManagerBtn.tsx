import React from "react";

interface MainManagerBtnProps {
  title: string;
  className?: string;
  onFileChange: (title: string, file: File) => void;
  selectedFiles: Record<string, File>;
}

const MainManagerBtn = ({
  title,
  className,
  onFileChange,
  selectedFiles,
}: MainManagerBtnProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];
    if (newFile) {
      onFileChange(title, newFile);
    }
  };

  return (
    <div className="flex items-center justify-between w-full m-1">
      <div className={`w-16 ${className} whitespace-nowrap`}>{title}</div>
      <div className="flex justify-between w-full items-center">
        <input
          className="inline-block h-10 px-3 border w-3/4 text-[#999999] outline-none text-center"
          placeholder="첨부파일"
          readOnly
          value={
            Object.keys(selectedFiles).length > 0
              ? selectedFiles[title]?.name || ""
              : ""
          }
        />
        <label
          htmlFor={`file-${title}`}
          className="border px-3 py-2 cursor-pointer"
        >
          파일찾기
        </label>
        <input
          className="absolute w-0 h-0 p-0 hidden border-0"
          type="file"
          accept="image/*"
          id={`file-${title}`}
          onChange={(e) => handleFileChange(e)}
        />
      </div>
    </div>
  );
};

export default MainManagerBtn;
