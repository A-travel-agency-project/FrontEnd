import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

const UiEditor = () => {
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
        initialValue=""
        previewStyle="vertical"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        plugins={[colorSyntax]}
        language="ko-KR"
        theme={""}
        toolbarItems={toolbarItems}
      />
    </>
  );
};
export default UiEditor;
