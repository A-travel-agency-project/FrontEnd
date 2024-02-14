import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useEffect, useRef } from "react";

const UiEditor = ({onChange}:{onChange:(content:string) => void;}) => {

  const editorRef = useRef<Editor| null> (null)
  const handleEditorChange = () => {
    const editorIns = editorRef.current?.getInstance();
    const contentHtml = editorIns?.getHTML() || "";
    onChange(contentHtml);
  };

 

  const toolbarItems = [
    ["heading", "bold", "italic"],
    ["hr"],
    ["ul", "ol", "task"],
    ["link"],
    ["image"],
    ["code"],
    ["scrollSync"],
    ["codeblock"],
  ];
  return (
    <>
      <Editor
      ref={editorRef}
        initialValue=""
        previewStyle="vertical"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        plugins={[colorSyntax]}
        language="ko-KR"
        theme={""}
        toolbarItems={toolbarItems}
        onChange={handleEditorChange}
        hideModeSwitch={true}
      />
    </>
  );
};
export default UiEditor;
