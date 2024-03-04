import { USER_INFO_CATEGORIES } from "../../constants/userdata";
import SectionTitle from "./SectionTitle";

const TravelerInfo = () => {
  return (
    <div>
      <SectionTitle title="여행자 정보" />
      <div className="w-[664px] flex flex-col flex-wrap gap-y-[16px] p-[22px] border-[1px] border-sub-black">
        {USER_INFO_CATEGORIES.map((item) =>
          item.id === "userName" || item.id === "phoneNumber" ? (
            <div className="flex text-sub-black text-[14px]" key={item.id}>
              <label htmlFor={item.id}>
                <span>*</span>
                {item.name}
              </label>
              <input
                type={"text"}
                id={item.id}
                placeholder={
                  typeof item.description === "string" ? item.description : ""
                }
              />
            </div>
          ) : item.id === "enFirstName" ? (
            <div className="flex text-sub-black text-[14px]" key={item.id}>
              <label htmlFor={item.id}>{item.name[0]}</label>
              <label htmlFor={item.id}>{item.name[1]}</label>
              <input
                id={item.id}
                placeholder={item.description ? item.description[0] : ""}
              />
              <label htmlFor="enLastName">{item.name[2]}</label>
              <input
                id="enLastName"
                placeholder={item.description ? item.description[1] : ""}
              />
            </div>
          ) : item.id === "gender" ? (
            <div className="flex text-sub-black text-[14px]" key={item.id}>
              <label>{item.name}</label>
              <input type="radio" name={item.id} />

              <input type="radio" name={item.id} />
            </div>
          ) : (
            item.id === "birth" && (
              <div className="flex text-sub-black text-[14px]" key={item.id}>
                <label id={item.id}>{item.name}</label>
                <input type="text" name={item.id} />
                {item.description && (
                  <label id={item.id}>{item.description[0]}</label>
                )}
                <input type="text" name={item.id} />
                {item.description && (
                  <label id={item.id}>{item.description[1]}</label>
                )}
                <input type="text" name={item.id} />
                {item.description && (
                  <label id={item.id}>{item.description[2]}</label>
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default TravelerInfo;
