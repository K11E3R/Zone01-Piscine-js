function format(givenDate, formatGiven) {
    const date = new Date(givenDate);
    const padZero = (num) => num.toString().padStart(2, "0");

    const replacements = {
        yyyy: Math.abs(date.getFullYear()).toString().padStart(4, "0"),
        y: Math.abs(date.getFullYear()),
        dd: padZero(date.getDate()),
        d: date.getDate().toString(),
        hh: padZero(date.getHours() % 12),
        h: date.getHours() % 12,
        mm: padZero(date.getMinutes()),
        m: date.getMinutes(),
        MMMM: monthsLong[date.getMonth()],
        MMM: months[date.getMonth()],
        MM: padZero(date.getMonth() + 1),
        M: (date.getMonth() + 1).toString(),
        EEEE: daysLong[date.getDay()],
        E: days[date.getDay()],
        a: a(date),
        ss: padZero(date.getSeconds()),
        s: date.getSeconds(),
        HH: padZero(date.getHours()),
        GGGG: date.getFullYear() > 0 ? "Anno Domini" : "Before Christ",
        G: date.getFullYear() > 0 ? "AD" : "BC",
    };

    return formatGiven.replace(/(yyyy|y|dd|d|hh|h|mm|m|MMMM|MMM|MM|M|EEEE|E|a|ss|s|HH|GGGG|G)/g, (match) => replacements[match]);
}

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const monthsLong = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const daysLong = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function a(date) {
    return date.getHours() >= 12 ? 'PM' : 'AM';
}

function gggg(date) {
    return date.getFullYear() > 0 ? "Anno Domini" : "Before Christ";
}

function g(date) {
    return date.getFullYear() > 0 ? "AD" : "BC";
}
