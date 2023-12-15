const debounce = (fun, timer, { ld } = {}) => {
    let timer, isFirst = true;

    return () => {
        if (isFirst && ld) {
            fun.apply(this, arguments);
            isFirst = false;
        }

        clearTimeout(timer);
        timer = setTimeout(() => fun.apply(this, arguments), timer);
    };
};
