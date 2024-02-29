import { memberInfo } from "../constants/data";
import ManagerTitle from "../components/Manager/ManagerTitle";
import { useState } from "react";
import PasswordEditModal from "../components/MyPage/PasswordEditModal";

const EditMember = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const handlePasswordModalClick = () => {
    setModalActive(true);
  };
  return (
    <div className="w-full relative">
      <ManagerTitle title="회원 정보 수정" />
      <div className="border-t border-black">
        {memberInfo.map((el, idx) => (
          <table key={idx} className="flex border-b border-black w-full ">
            <tbody>
              <tr className="flex items-center">
                <th className="border-r w-40 whitespace-nowrap border-black bg-title-box py-3">
                  {el.title}
                </th>
                {el.title === "비밀번호" ? (
                  <td className="ml-4">
                    <button
                      onClick={handlePasswordModalClick}
                      className="border border-black bg-title-box px-5"
                    >
                      비밀번호 변경
                    </button>
                  </td>
                ) : el.title === "가족인원" ||
                  el.title === "자녀대표이름" ||
                  el.title === "핸드폰번호" ? (
                  <td className="ml-4">
                    <input
                      className="border"
                      type="text"
                      placeholder={el.title}
                    />
                  </td>
                ) : (
                  <td className="ml-4">{el.content}</td>
                )}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <button className="px-14 bg-title-box border border-black ">
          <span>수정하기</span>
        </button>
      </div>
      {modalActive && <PasswordEditModal setModalActive={setModalActive} />}
    </div>
  );
};

export default EditMember;
