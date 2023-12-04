function format(givenDate, formatGiven) {
    let res = String(formatGiven);
    let date = new Date(givenDate);

    const replaceToken = (token, value) => {
        res = res.replace(new RegExp(token, 'g'), value);
    };

    replaceToken(/yyyy/g, Math.abs(date.getFullYear()).toString().padStart(4, '0'));
    replaceToken(/y/g, Math.abs(date.getFullYear()));
    replaceToken(/dd/g, date.getDate().toString().padStart(2, '0'));
    replaceToken(/d/g, date.getDate().toString());
    replaceToken(/hh/g, String(H(date)).padStart(2, '0'));
    replaceToken(/h/g, H(date));
    replaceToken(/mm/g, date.getMinutes().toString().padStart(2, '0'));
    replaceToken(/m/g, date.getMinutes());
    replaceToken(/MMMM/g, monthsLong[date.getMonth()]);
    replaceToken(/MMM/g, months[date.getMonth()]);
    replaceToken(/MM/g, (date.getMonth() + 1).toString().padStart(2, '0'));
    replaceToken(/M/g, (date.getMonth() + 1).toString());
    replaceToken(/EEEE/g, daysLong[date.getDay()]);
    replaceToken(/E/g, days[date.getDay()]);

    if (formatGiven.includes('a')) {
        replaceToken(/a/g, a(date));
    }

    replaceToken(/ss/g, date.getSeconds().toString().padStart(2, '0'));
    replaceToken(/s/g, date.getSeconds());
    replaceToken(/HH/g, date.getHours().toString().padStart(2, '0'));
    replaceToken(/H/g, date.getHours());
    replaceToken(/GGGG/g, gggg(date));
    replaceToken(/G/g, g(date));

    return res;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function H(date) {
    return date.getHours() % 12;
}

function a(date) {
    return date.getHours() >= 12 ? 'PM' : 'AM';
}

function gggg(date) {
    return date.getFullYear() > 0 ? 'Anno Domini' : 'Before Christ';
}

function g(date) {
    return date.getFullYear() > 0 ? 'AD' : 'BC';
}
