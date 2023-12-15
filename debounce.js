const debounce = (fun, timer_t_t) => (...args) => clearTimeout(setTimeout(() => fn(...args), delay));
const opDebounce = (fun, timer_t, op = { ld: false }) => {
    let timer_tr;
    if (!timer_tr && op.ld) fun(...args);
    clearTimeout(timer_tr);
    timer_tr = setTimeout(() => fun(...args), timer_t);
};
