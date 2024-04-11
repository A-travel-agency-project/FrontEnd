import React, { SetStateAction, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { baseInstance } from "../../api/instance";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import UiViewer from "../common/Editor/UiViewer";

type DetailState = {
  setEditorActive: React.Dispatch<SetStateAction<boolean>>;
};
type DetailData = {
  title: string;
  createdDate: string;
  content: string;
};

const CommunityDetail = ({ setEditorActive }: DetailState) => {
  const { state } = useLocation();
  const { postId } = useParams();
  const [detailData, setDetailData] = useState<DetailData>();
  const isAdmin =
    window.localStorage.getItem("role") === "ROLE_ADMIN" ? true : false;
  useEffect(() => {
    baseInstance
      .get(`/posts/${postId}`)
      .then((el) => {
        setDetailData(el.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [postId]);

  return (
    <div className="w-full flex flex-col max-xsm:px-[16px]">
      <div className="w-full h-[1px]  bg-[#FBB03C]  mb-1" />
      <div className="w-full px-10 mb-2 flex justify-between border-y border-main-color bg-main-color bg-opacity-10">
        <div className="whitespace-nowrap">{detailData?.title}</div>
        <div className="flex">
          <div className="mr-20 max-xsm:hidden">관리자</div>
          <div>{detailData?.createdDate}</div>
        </div>
      </div>
      <div className="border border-[#707070]  flex justify-center h-96 overflow-x-hidden">
        {detailData && <UiViewer content={detailData.content} />}
      </div>
      <div className="flex justify-end">
        {isAdmin && (
          <Link
            to={"/community"}
            state={state}
            onClick={() => setEditorActive(false)}
            className="mt-5 border border-main-color rounded-full px-5 hover:text-white hover:bg-main-color
            max-xsm:text-[9px] max-xsm:bg-main-color max-xsm:text-white max-xsm:rounded-none max-xsm:mt-[4px] 
            max-xsm:px-[31px] max-xsm:py-[4px]"
          >
            수정하기
          </Link>
        )}
      </div>
    </div>
  );
};

export default CommunityDetail;
