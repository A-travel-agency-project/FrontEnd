import { useState } from "react";
import { country, packageHeaders, packageItems } from "../../constants/data";
import Pagination from "../../components/common/Pagination";
import { useNavigate } from "react-router-dom";
import ManagerTitle from "../../components/Manager/ManagerTitle";
import ManagerTitleBox from "../../components/Manager/ManagerTitleBox";

interface CountryData {
  key: string;
  value: string;
}

interface DisplayDataItem {
  key: number;
  name: string;
  package: string;
  period: string;
}

const PackageManager = () => {
  const navagation = useNavigate();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [packagePeriodActive, setPackagePeriodActive] = useState(false);

  const handlePackageToggle = () => {
    setPackagePeriodActive(!packagePeriodActive);
  };

  const handleToggleAll = () => {
    if (selectedItems.length === packageItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(packageItems.map((item) => item.key));
    }
  };

  const handleToggleItem = (key: number): void => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter((id) => id !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  const emptyData = Array.from({ length: 10 - packageItems.length }).map(
    (_, index) => ({
      key: packageItems.length + index + 1,
      name: "",
      package: "",
      period: "",
    })
  );

  const displayData: DisplayDataItem[] = [...packageItems, ...emptyData];

  return (
    <div className="w-full">
      <ManagerTitle title="패키지 목록" />
      <div className="flex items-center mb-20">
        <ManagerTitleBox name="여행지" className="mr-8" />
        <select
          defaultValue="default"
          className="border border-black w-52 py-2 "
        >
          <option disabled value="default" hidden>
            전체 여행지
          </option>

          {country.map((el: CountryData) => {
            return <option value={el.key}>{el.value}</option>;
          })}
        </select>
      </div>
      <table className="table-auto w-full border-collapse border border-black mb-3">
        <thead className="bg-title-box h-[45px] 2sm:h-[50px]">
          <tr>
            <th className="p-2 ">
              <input
                type="checkbox"
                onChange={handleToggleAll}
                checked={selectedItems.length === packageItems.length}
              />
            </th>
            {packageHeaders.map((el, index) => (
              <th key={index} className="p-2 border border-black">
                {el.text}
                {el.value === "packageperiod" &&
                  (packagePeriodActive ? (
                    <button onClick={handlePackageToggle}>↑</button>
                  ) : (
                    <button onClick={handlePackageToggle}>↓</button>
                  ))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((el) => (
            <tr className=" h-[45px] 2sm:h-[50px] text-center" key={el.key}>
              <td className="border-black border">
                <input
                  type="checkbox"
                  onChange={() => handleToggleItem(el.key)}
                  checked={selectedItems.includes(el.key)}
                />
              </td>
              <td className="border  border-black p-2">{el.name}</td>
              <td className="border border-black p-2">{el.package}</td>
              <td className="border border-black p-2">{el.period}</td>
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
        <button className="border border-black px-5 py-2">삭제</button>
      </div>
      <div className="flex justify-center items-center w-full">
        <Pagination items={10} count={10} />
      </div>
    </div>
  );
};

export default PackageManager;
