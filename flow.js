const flow = arr => (...args) => arr.reduce((acc, fn) => [fn(...acc)], args).pop();
