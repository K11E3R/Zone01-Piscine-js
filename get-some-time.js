function firstDayWeek(week, year) {
    let date = new Date(year, 0, 1 + (week - 1) * 7, 2);
    date.setHours(0, 0, 0, 0);

    let startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1);

    if (startOfWeek.getFullYear() !== parseInt(year, 10)) {
        startOfWeek = new Date(year, 0, 1);
    }

    return formatDate(startOfWeek);
}

function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
}
