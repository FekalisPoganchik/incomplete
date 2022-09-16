import React from "react";
import "./calendar_table.scss";
import { useEffect } from "react";

const Calendar = ({ month, now, posts, setPosts, compareTarget }) => {
    const cellsAmount = 42;
    const cells = [];
    const prevDaysAmount = getPrevDaysAmount();

    const weekDays = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ];

    function getPrevDaysAmount() {
        const firstWeekDayOfMonth = new Date(now, month, 1).getDay();
        return firstWeekDayOfMonth ? firstWeekDayOfMonth - 1 : 6;
    }

    for (let i = -prevDaysAmount; i < cellsAmount - prevDaysAmount; i++) {
        const firstDayOfMonth = new Date(now, month, 1);
        const targetDate = new Date(
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + i)
        ).toLocaleDateString("ru-RU");
        cells.push(
            cells.length < 7
                ? `${weekDays[cells.length]}, ${targetDate.replace(/^0+/, "")}`
                : targetDate.replace(/^0+/, "")
        );
    }

    useEffect(() => {
        if (
            localStorage.getItem(month) === null ||
            now > new Date().getFullYear() ||
            now < new Date().getFullYear()
        ) {
            const newPosts = cells.map((i) => {
                return {
                    id: i.replace(/[^.\d]/g, ""),
                    event: "",
                    date: i,
                    participants: "",
                    descr: "",
                };
            });
            localStorage.setItem(month, JSON.stringify(newPosts));
        }
    }, [month]);

    let renderCalendar = posts.map((i) => {
        return (
            <div
                className="day"
                id={i.id.replace(/[^.\d]/g, "")}
                key={i.id.replace(/[^.\d]/g, "")}
                onClick={(e) => compareTarget(e.currentTarget.id)}
            >
                <div className="numberDay">
                    {i.date.slice(0, -8).replace(/^0+/, "")}
                </div>
                <div className="event">{i.event}</div>
                <div className="participants">{i.participants}</div>
            </div>
        );
    });
    console.log(renderCalendar);

    return <div className="wrapper_calendar">{renderCalendar}</div>;
};

export default Calendar;
