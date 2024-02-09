import React from "react";
import UiEditor from "../common/UiEditor";

interface PackageEditorProps {
  title: string;
}

const PackageEditorList = ({ title }: PackageEditorProps) => {
  return (
    <div className="w-full flex">
      <h2 className="font-bold text-xl mb-4 whitespace-nowrap mr-20">
        {title}
      </h2>
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <div className="flex mb-4">
            <div className="bg-title-box px-5 whitespace-nowrap">제목</div>
            <input className="w-full outline-none border" />
          </div>
          <UiEditor />
        </div>
      </div>
    </div>
  );
};

export default PackageEditorList;
