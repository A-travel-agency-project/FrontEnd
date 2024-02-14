import React, { useState } from "react";
import UiEditor from "../common/UiEditor";

interface PackageEditorProps {
  title: string;
  label:string;
}

const PackageEditorList = ({ title,label }: PackageEditorProps) => {
  // 전역 변수로 빼서 사용하기
  const [editorContent, setEditorContent] = useState({label:"",content:""});


  console.log(editorContent)
  const handleEditorChange = (label: string,content:string) => {
    setEditorContent({label,content});
  };
  return (
    <div className="w-full flex mb-5">
      <h2 className="font-bold text-xl mb-4 whitespace-nowrap mr-20">
        {title}
      </h2>
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <UiEditor onChange={(content) => handleEditorChange(label,content)}/>
        </div>
      </div>
    </div>
  );
};

export default PackageEditorList;
