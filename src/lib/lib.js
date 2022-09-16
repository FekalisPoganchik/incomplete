export const createCalendarTableByMonth = (month) => {
    const now = new Date();
    const cellsAmount = 42;
    const cells = [];
    const prevDaysAmount = getPrevDaysAmount();
    const weekDays = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];

    function getPrevDaysAmount() {
        const firstWeekDayOfMonth = new Date(
            now.getFullYear(),
            month,
            1
        ).getDay();
        return firstWeekDayOfMonth ? firstWeekDayOfMonth - 1 : 6;
    }

    for (let i = -prevDaysAmount; i < cellsAmount - prevDaysAmount; i++) {
        const firstDayOfMonth = new Date(now.getFullYear(), month, 1);
        const date = new Date(
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + i)
        ).toLocaleDateString("ru-RU");
        const weekDay = weekDays[new Date(firstDayOfMonth).getDay()];
        cells.push({ weekDay, date });
    }

    return cells;
};

export const getMothName = (index) => {
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

    return monthName[index];
};
