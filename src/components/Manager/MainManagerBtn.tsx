import React, { useState } from "react";

interface MainManagerBtnProps {
  title: string;
  className: string;
}

const MainManagerBtn = ({ title, className }: MainManagerBtnProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  console.log(selectedFile?.name);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="flex items-center justify-between w-full m-1">
      <div className={`w-16 ${className} whitespace-nowrap`}>{title}</div>
      <div className="flex justify-between w-full items-center">
        <input
          className="inline-block h-10 px-3 border w-3/4 text-[#999999] outline-none text-center"
          value={selectedFile?.name || ""}
          placeholder="첨부파일"
          readOnly
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
          id={`file-${title}`}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default MainManagerBtn;
