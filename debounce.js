const debounce = (func, timer_t) => {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), timer_t)
    }
}