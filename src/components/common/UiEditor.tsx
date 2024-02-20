import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editorRef?: React.MutableRefObject<any>;
}
const UiEditor = ({ editorRef }: Props) => {
  const test = editorRef?.current?.getInstance();
  console.log(test?.getHTML());
  console.log(test?.getMarkdown());
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
  const onChange = () => {
    console.log(editorRef?.current?.getInstance().getHTML());
  };
  return (
    <>
      <Editor
        initialValue=""
        previewStyle="vertical"
        initialEditType="markdown"
        useCommandShortcut={false}
        plugins={[colorSyntax]}
        language="ko-KR"
        theme={""}
        toolbarItems={toolbarItems}
        ref={editorRef}
        onChange={onChange}
      />
    </>
  );
};
export default UiEditor;
