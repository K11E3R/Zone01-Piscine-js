function addWeek(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day0 = new Date('0001-01-01');
    const diff = ((date - day0) / (60 * 60 * 24 * 1000)) % 2;

    return (diff % 2 === 0 || diff < 1) ? days[date.getDay()] : 'second' + days[date.getDay()];
}

function timeTravel({ date, hour, minute, second }) {
    date.setHours(hour, minute, second);
    return date;
}