import React from "react";
import "./month_selector.scss";
import Left from "../../../../components/icons/Left";
import Right from "../../../../components/icons/Right";

const MonthSelector = ({ month, setMonth, now, setNow }) => {
    const monthName = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    const nextMonth = () => {
        month < 11 ? setMonth(month + 1) : setMonth(0);
        month === 11 ? setNow(now + 1) : setNow(now);
    };

    const prevMonth = () => {
        month > 0 ? setMonth(month - 1) : setMonth(11);
        month === 0 ? setNow(now - 1) : setNow(now);
    };

    return (
        <div className="month">
            <i onClick={prevMonth}>
                <Left />
            </i>
            <div className="date">{`${monthName[month]}, ${now}`}</div>
            <i onClick={nextMonth}>
                <Right />
            </i>
        </div>
    );
};

export default MonthSelector;
