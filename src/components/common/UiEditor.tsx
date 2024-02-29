import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import axios from "axios";
import { useEffect } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editorRef?: React.MutableRefObject<any>;
  title?: string;
  index?: number;
  onChange?: (e: React.ChangeEvent<HTMLElement>) => void;
  handleDayInputChange?: (
    value: { dayContentMd: string; dayContentHtml: string },
    name: string,
    index: number
  ) => void;
  name?: string;
  initialValue?: string;
}
type HookCallback = (url: string, text?: string) => void;

const UiEditor = ({
  editorRef,
  onChange,
  handleDayInputChange,
  name,
  index,
  initialValue,
}: Props) => {
  const toolbarItems = [
    ["heading", "bold", "italic"],
    ["hr"],
    ["ul", "ol"],
    ["link"],
    ["image"],
    ["code"],
    ["codeblock"],
  ];
  useEffect(() => {
    if (initialValue) {
      const editorInstance = editorRef?.current.getInstance();
      if (editorInstance) {
        editorInstance.setMarkdown(initialValue);
      }
    }
  }, [initialValue, editorRef]);
  const handleChange =
    onChange ||
    (() => {
      if (handleDayInputChange && name !== undefined && index !== undefined) {
        const mdValue = editorRef?.current.getInstance().getMarkdown();
        const htmlValue = editorRef?.current.getInstance().getHTML();

        handleDayInputChange(
          { dayContentMd: mdValue, dayContentHtml: htmlValue },
          name,
          index
        );
      }
    });

  return (
    <>
      <Editor
        initialValue={initialValue}
        previewStyle="vertical"
        initialEditType="markdown"
        useCommandShortcut={false}
        plugins={[colorSyntax]}
        language="ko-KR"
        theme={""}
        toolbarItems={toolbarItems}
        ref={editorRef}
        onChange={handleChange}
        hideModeSwitch
        hooks={{
          addImageBlobHook: async (blob: Blob, callback: HookCallback) => {
            try {
              const formData = new FormData();
              console.log(blob);
              formData.append("file", blob);

              const response = await axios.post(
                "http://13.124.147.192:8080/images",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );

              console.log(response);

              if (callback) {
                callback(response.data.data.imageUrl);
              }
            } catch (error) {
              console.error(error);
            }
          },
        }}
        customHTMLRenderer={{
          htmlBlock: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            iframe(node: any) {
              return [
                {
                  type: "openTag",
                  tagName: "iframe",
                  outerNewLine: true,
                  attributes: node.attrs,
                },
                { type: "html", content: node.childrenHTML },
                { type: "closeTag", tagName: "iframe", outerNewLine: true },
              ];
            },
          },
        }}
      />
    </>
  );
};
export default UiEditor;
