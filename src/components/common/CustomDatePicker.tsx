import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  className: string;
}

const CustomDatePicker = ({ className }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date()}
        // maxDate={new Date()}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={`outline-none border text-center border-black ${className}`}
      />
    </div>
  );
};

export default CustomDatePicker;
