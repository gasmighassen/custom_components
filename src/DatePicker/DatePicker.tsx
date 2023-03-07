import React, { useState } from "react";
import "../_dist/DatePicker.css";
type Props = {};

const DatePicker = (props: Props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getNumberOfDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getSortedDays = (year: number, month: number) => {
    const dayIndex = getNumberOfDaysInMonth(year, month);
    const firstHalf = dayNames.slice(dayIndex);
    return [...firstHalf, ...dayNames.slice(0, dayIndex)];
  };

  const range = (start: number, end: number) => {
    const length = Math.abs(end - start) / 1;
    const result = Array.from({ length }).reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: [], current: start }
    );
    return result;
  };

  return (
    <div className="dp-container">
      <div className="dp-calender">
        <div className="dp-header">
          <img
            className="left-arrow"
            src="../../images/left_arrow.svg"
            alt=""
          />
          <p>
            {monthNames[currentMonth]} {currentYear}
          </p>
          <img
            className="right-arrow"
            src="../../images/right_arrow.svg"
            alt=""
          />
        </div>
        <div className="dp-body">
          <div className="calender-grid">
            {getSortedDays(currentYear, currentMonth).map((day) => (
              <p className="days">{day}</p>
            ))}
          </div>
          <div className="calender-grid">
            {range(
              1,
              getNumberOfDaysInMonth(currentYear, currentMonth) + 1
            ).result.map((day: any) => (
              <p className="days">{day}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
