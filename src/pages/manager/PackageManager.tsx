import React, { useEffect, useState } from "react";
import { country, packageHeaders, packageItems } from "../../constants/data";
import Pagination from "../../components/common/Pagination";
import { useNavigate } from "react-router-dom";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import ManagerTitleBox from "../../components/Manager/ManagerTitleBox";
import { usePostPackage } from "../../api/usePostPackage";
import { useDeletePackage } from "../../api/useDeletePackage";
import PackageSelect from "../../components/Manager/package/PackageSelect";
import { useChangePackage } from "../../api/useChangePackage";
interface CountryData {
  key: string;
  value: string;
}

const PackageManager = () => {
  const navagation = useNavigate();
  // 여행 체크
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  console.log(selectedItems);
  /* 필터링 */
  const [arrowState, setArrowState] = useState<{ [key: string]: boolean }>({
    packageperiod: false,
    travelarea: false,
    save: false,
    openState: false,
  });
  /* 필터링 */
  // 여행지 selectBox
  const [countrySelect, setConuntrySelect] = useState<string | null>(null);
  // 공개 상태 변경
  const [privacyState, setPrivacyState] = useState<string | null>(null);
  // 공개/비공개
  const [privacy, setPrivacy] = useState<string | null>(null);
  // 임시저장/저장
  const [save, setSave] = useState<string | null>(null);
  // 패키지 삭제 active
  const [deleteActive, setDeleteActive] = useState<boolean>(false);
  // 공개 비공개 active
  const [changeActive, setChangeActive] = useState<boolean>(false);

  console.log(privacyState);
  // 공개 변경
  const { packageUpdate } = useChangePackage({
    operation: privacyState,
    ids: selectedItems,
    setChangeActive,
    changeActive,
  });
  // 패키지 삭제
  const { packageDelete } = useDeletePackage({
    operation: "",
    ids: selectedItems,
    deleteActive,
    setDeleteActive,
  });
  // 패키지 여행 리스트
  const { packageList } = usePostPackage({
    data: {
      countryName: countrySelect === "전체 여행지" ? null : countrySelect,
      privacy: privacy === "공개 변경" ? null : privacy,
      saveState: save === "저장 상태" ? null : save,
      countryOrder: arrowState.travelarea ? 0 : 1,
      periodOrder: arrowState.packageperiod ? 0 : 1,
      saveOrder: arrowState.save ? 0 : 1,
      privacyOrder: arrowState.openState ? 0 : 1,
      offset: 0,
      limit: 10,
    },
    countrySelect,
    privacy,
    deleteActive,
    arrowState,
    save,
    changeActive,
  });

  // 체크 삭제
  const handlePackageDelete = () => {
    if (selectedItems.length !== 0) {
      setDeleteActive(true);
      alert("삭제 완료!");
    } else {
      alert("삭제 할 패키지를 체크해주세요");
    }
  };
  // 공개 변경

  console.log(changeActive);

  // 기간
  const handlePackageToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const packageValue = e.currentTarget.dataset
      .package as keyof typeof arrowState;

    setArrowState((prevState) => ({
      ...prevState,
      [packageValue]: !prevState[packageValue],
    }));
    if (packageValue === "packageperiod") {
      console.log("Clicked packageperiod");
    } else if (packageValue === "travelarea") {
      console.log("Clicked travelarea");
    } else if (packageValue === "save") {
      console.log("Clicked save");
    } else if (packageValue === "openState") {
      console.log("Clicked openState");
    }
  };
  // 전체 체크
  const handleToggleAll = () => {
    if (selectedItems.length === packageList.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(packageList.map((item) => item.packageId));
    }
  };
  // 개별체크
  const handleToggleItem = (key: number): void => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter((id) => id !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  return (
    <div className="w-full">
      <ManagerTitle title="패키지 목록" />
      <div className="flex items-center mb-20">
        <ManagerTitleBox name="여행지" className="mr-8" />
        <select
          className="border border-black w-52 py-2"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setConuntrySelect(e.target.value)
          }
          value={countrySelect || ""}
        >
          {country.map((el: CountryData) => {
            return (
              <option key={el.key} value={el.value}>
                {el.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-2 flex justify-between">
        <div>
          <button
            className="border border-black px-4 mr-2"
            onClick={handlePackageDelete}
          >
            <span>선택삭제</span>
          </button>
          <PackageSelect
            options={["공개", "비공개"]}
            value={privacyState}
            onChange={setPrivacyState}
            disabledOption="공개 상태"
            setChangeActive={setChangeActive}
          />
        </div>
        <div>
          <PackageSelect
            options={["공개 상태", "공개", "비공개"]}
            value={privacy}
            onChange={setPrivacy}
          />

          <PackageSelect
            options={["저장 상태", "저장", "임시저장"]}
            value={save}
            onChange={setSave}
          />
        </div>
      </div>
      <table className="table-auto w-full border-collapse border border-black mb-3">
        <thead className="bg-title-box h-[45px] 2sm:h-[50px]">
          <tr>
            <th className="p-2 ">
              <input
                type="checkbox"
                onChange={handleToggleAll}
                checked={selectedItems.length === packageList.length}
              />
            </th>
            {packageHeaders.map((el, index) => (
              <th key={index} className="p-2 border border-black">
                {el.text}
                {["packageperiod", "travelarea", "save", "openState"].includes(
                  el.value
                ) && (
                  <button onClick={handlePackageToggle} data-package={el.value}>
                    {arrowState[el.value] ? "↑" : "↓"}
                  </button>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {packageList.map((el) => (
            <tr
              className=" h-[45px] 2sm:h-[50px] text-center"
              key={el.packageId}
            >
              <td className="border-black border">
                <input
                  type="checkbox"
                  onChange={() => handleToggleItem(el.packageId)}
                  checked={selectedItems.includes(el.packageId)}
                />
              </td>
              <td className="border  border-black p-2">
                {el.countryName && <button>수정</button>}
              </td>
              <td className="border border-black p-2">
                {el.countryName && <button>복사</button>}
              </td>
              <td className="border border-black p-2">{el.packageName}</td>
              <td className="border border-black p-2">{el.countryName}</td>
              <td className="border border-black p-2">{el.period}일</td>
              <td className="border border-black p-2">{el.saveState}</td>
              <td className="border border-black p-2">{el.privacy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end whitespace-nowrap">
        <button
          onClick={() => {
            navagation("/newregistration");
          }}
          className="border border-black mr-2 px-5 py-2"
        >
          신규등록
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <Pagination items={10} count={10} />
      </div>
    </div>
  );
};

export default PackageManager;
