const debounce = (func, timer_t) => (...args) => {
    clearTimeout(debounce.timer);
    debounce.timer = setTimeout(() => func(...args), timer_t);
};

const opDebounce = (func, time, options = { leading: false }) => (...args) => {
    if (!opDebounce.timer && options.leading) func(...args);
    clearTimeout(opDebounce.timer);
    opDebounce.timer = setTimeout(() => func(...args), time);
};
