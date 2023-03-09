import React, { useEffect, useState } from "react";
import "../_dist/DatePicker.css";
import { CalendarOutlined } from "@ant-design/icons";

type Props = {
  value: React.Dispatch<any>;
  startEnd?: boolean;
};

const DatePicker: React.FC<Props> = ({ value, startEnd = false }) => {
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
  const [selected, setSelected] = useState<any>({});
  const [showCalender, setShowCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>({
    day: "DD",
    month: "MM",
    year: "YYYY",
  });

  let finaleDate =
    selectedDate.day + "/" + selectedDate.month + "/" + selectedDate.year;
  useEffect(() => {
    value(finaleDate);
  }, [finaleDate]);
  const getNumberOfDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getSortedDays = (year: number, month: number) => {
    const dayIndex = new Date(year, month, 1).getDay();
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

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  return (
    <div className="dp-container">
      <>
        {finaleDate === "DD/MM/YYYY" ? (
          <div className="dp-input-container">
            <input
              type="text"
              className="calender-input"
              placeholder="Select Date..."
              onClick={() => setShowCalender(!showCalender)}
            />
            <CalendarOutlined />
          </div>
        ) : (
          <div className="dp-input-container">
            <input
              type="text"
              className="calender-input"
              value={finaleDate}
              onClick={() => setShowCalender(!showCalender)}
            />
            <CalendarOutlined />
          </div>
        )}

        {showCalender && (
          <div className="dp-calender">
            <div className="dp-header">
              <img
                className="left-arrow"
                src="../../images/left_arrow.svg"
                alt=""
                onClick={() => prevMonth()}
              />
              <p>
                {monthNames[currentMonth]} {currentYear}
              </p>
              <img
                className="right-arrow"
                src="../../images/right_arrow.svg"
                alt=""
                onClick={() => nextMonth()}
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
                ).result.map((day, i) => (
                  <p
                    className={
                      selected.day === i &&
                      selected.month === currentMonth &&
                      selected.year === currentYear
                        ? "selected-day"
                        : "not-selected"
                    }
                    onClick={(e) => {
                      setSelectedDate({
                        ...selectedDate,
                        day: day,
                        month: currentMonth + 1,
                        year: currentYear,
                      });
                      setSelected({
                        ...selected,
                        day: i,
                        month: currentMonth,
                        year: currentYear,
                      });
                    }}
                  >
                    {day}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default DatePicker;
