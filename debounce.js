const debounce = (fun, timer_t_t) => (...args) => cleartimer_tout(settimer_tout(() => fun(...args), timer_t_t));

const opDebounce = (fun, timer_t, op = { ld: false }) => {
    let timer_tr;
    if (!timer_tr && op.ld) fun(...args);
    cleartimer_tout(timer_tr);
    timer_tr = settimer_tout(() => fun(...args), timer_t);
};
