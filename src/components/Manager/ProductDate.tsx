import React from "react";

const ProductDate = () => {
  const years = Array.from({ length: 9 }, (_, i) => 2022 + i);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <form className="ml-5 flex items-center">
      <select id="year" className="border border-black">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <label htmlFor="year" className="mr-5">
        년
      </label>

      <select id="month" className="border border-black">
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <label htmlFor="month" className="mr-5">
        월
      </label>

      <select id="day" className="border border-black">
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <label htmlFor="day" className="mr-5">
        일
      </label>

      <select id="hour" className="border border-black">
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <label htmlFor="hour" className="mr-5">
        시
      </label>

      <select id="minute" className="border border-black">
        {minutes.map((minute) => (
          <option key={minute} value={minute}>
            {minute}
          </option>
        ))}
      </select>
      <label htmlFor="minute">분</label>
    </form>
  );
};

export default ProductDate;
