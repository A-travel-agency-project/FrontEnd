import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { TravelerInfoData } from "../../../types/manager";
import {
  birthFormat,
  checkValidDate,
  phoneNumberFormat,
} from "../../../utils/validationUtils";
import CustomRadioBtn from "../../Reservation/CustomRadionbtn";
import OrderDetailBtn from "./OrderDetailBtn";
import { calculateAge } from "../../../utils/calculateAge";
import { WRONG_AGE_MESSAGES } from "../../../constants/travelerdata";

const OrderedTravelerInfo = ({
  data,
  representative,
  id,
  handleDelete,
  handleEdit,
  startDate,
}: {
  startDate?: string;
  data: TravelerInfoData;
  representative?: boolean;
  id?: number;
  handleDelete?: (id: number, name: string, role: string) => void;
  handleEdit?: (
    id: number,
    info: TravelerInfoData,
    changedRole?: string,
    orderdRole?: string
  ) => void;
}) => {
  const [travelerInfo, setTravlerInfo] = useState<TravelerInfoData>({
    travelerName: "",
    enFirstName: "",
    enLastName: "",
    gender: "남",
    birth: "",
    phoneNumber: "",
    representative: false,
  });
  const [editable, setEditable] = useState(false);

  const [birth, setBrith] = useState("");

  const handleInput = (id: string, value: string) => {
    setTravlerInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleEditable = (role?: string) => {
    if (editable) {
      if (role === "cancel") {
        setTravlerInfo(() => ({ ...data }));
      } else if (role === "submit" && id && handleEdit && startDate) {
        if (data.birth !== "")
          handleEdit(
            id,
            travelerInfo,
            calculateAge(birth, startDate),
            calculateAge(data.birth, startDate)
          );
        if (data.birth === "") {
          handleEdit(id, travelerInfo, calculateAge(birth, startDate));
        }
      }
    }
    setEditable(!editable);
  };

  const handleDeleteClick = () => {
    if (startDate && handleDelete && id) {
      handleDelete(
        id,
        travelerInfo.travelerName,
        calculateAge(data.birth, startDate)
      );
    }
  };

  const handleBirth = (date: string) => {
    setBrith(date);
  };

  useEffect(() => {
    if (data.birth !== birth && birth.length === 10) {
      if (checkValidDate(birth) && startDate) {
        const changedRole = calculateAge(birth, startDate); // 바뀌는 나이 카테고리
        const orderedRole = calculateAge(data.birth, startDate);
        if (orderedRole !== changedRole) {
          // 나이 카테고리가 변경되어야 할 시
          const changeAge = confirm(WRONG_AGE_MESSAGES[changedRole]);
          if (changeAge) {
            setTravlerInfo((prev) => ({ ...prev, birth: birth }));
          }
        } else if (orderedRole === changedRole) {
          setTravlerInfo((prev) => ({ ...prev, birth: birth }));
        }
      }
      if (!checkValidDate(birth)) {
        alert("유효한 생년월일이 아닙니다.");
      }
    }
  }, [birth, startDate, id, data.birth]);

  useEffect(() => {
    setTravlerInfo((prev) => ({ ...prev, ...data }));
    if (!data.travelerName) {
      setEditable(true);
    }
    if (data.travelerName && startDate) {
      setBrith(data.birth);
    }
    if (representative) {
      setBrith(data.birth);
    }
  }, [data, startDate, representative]);

  return (
    <div className={`flex flex-col items-end w-full min-w-max`}>
      {!representative && (
        <div className="flex gap-[12px] mb-[4px]">
          {id != null && !editable ? (
            <OrderDetailBtn handleClick={handleEditable} label="수정하기" />
          ) : travelerInfo.travelerName !== "" ? (
            <>
              <OrderDetailBtn
                handleClick={handleEditable}
                role="submit"
                label="수정완료"
              />
              <OrderDetailBtn
                handleClick={handleEditable}
                role="cancel"
                label="수정취소"
              />
            </>
          ) : (
            <OrderDetailBtn handleClick={handleEditable} label="작성완료" />
          )}
          {!travelerInfo.representative && handleDelete && !editable && (
            <OrderDetailBtn handleClick={handleDeleteClick} label="삭제하기" />
          )}
        </div>
      )}
      <div
        className={`w-full min-w-max ${
          !representative && !editable ? "border-y border-black" : ""
        } ${editable ? "border-[2px] border-main-color" : ""}`}
      >
        <div className="flex items-center border-b border-sub-black w-ful min-w-max">
          <div className="flex items-center w-[33.3%] min-w-max">
            <TableHeader smallHeader={true} category="이름" />
            <input
              className={`disabled:bg-transparent px-[24px] w-full min-w-max`}
              id="travelerName"
              value={travelerInfo.travelerName}
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              disabled={!editable}
            />
          </div>
          <div className="flex items-center w-[33.3%] min-w-max">
            <TableHeader smallHeader={true} category="영문 이름" />
            <input
              className={`disabled:bg-transparent px-[24px] w-full min-w-max`}
              id="enFirstName"
              value={travelerInfo.enFirstName}
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              disabled={!editable}
            />
          </div>
          <div className="flex items-center w-[33.3%] min-w-max">
            <TableHeader smallHeader={true} category="영문 성" />
            <input
              className={`disabled:bg-transparent px-[24px] w-full min-w-max`}
              id="enLastName"
              value={travelerInfo.enLastName}
              onChange={(e) => handleInput(e.target.id, e.target.value)}
              disabled={!editable}
            />
          </div>
        </div>
        <div className="flex items-center w-full min-w-max">
          <div className="flex items-center  w-[33.3%] min-w-max">
            <TableHeader smallHeader={true} category="성별" />
            <div className="flex gap-[20px] px-[24px] w-full">
              <CustomRadioBtn
                label="남"
                id="gender"
                checked={travelerInfo.gender === "남"}
                handleInput={handleInput}
                disabled={!editable}
              />
              <CustomRadioBtn
                label="여"
                id="gender"
                checked={travelerInfo.gender === "여"}
                handleInput={handleInput}
                disabled={!editable}
              />
            </div>
          </div>
          <div className="flex items-center w-[33.3%] min-w-max">
            <TableHeader smallHeader={true} category="생년월일" />
            <input
              className={`disabled:bg-transparent px-[24px] w-full min-w-max`}
              type="text"
              id="birth"
              value={birth}
              onChange={(e) => handleBirth(birthFormat(e.target.value))}
              disabled={!editable}
            />
          </div>
          <div className="flex items-center w-[33.3%] min-w-max ">
            <TableHeader smallHeader={true} category="휴대폰" />
            <input
              className={`disabled:bg-transparent px-[24px] w-full min-w-max`}
              maxLength={13}
              type="tell"
              id="phoneNumber"
              value={travelerInfo.phoneNumber ?? ""}
              onChange={(e) =>
                handleInput(e.target.id, phoneNumberFormat(e.target.value))
              }
              disabled={!editable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderedTravelerInfo;
