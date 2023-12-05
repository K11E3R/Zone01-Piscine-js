const adder = (arr, value) => arr.reduce((acc, item) => acc + item, value ?? 0);

const sumOrMul = (arr, value) => arr.reduce((acc, item) => (item % 2 === 0 ? acc * item : acc + item), value ?? 0);

const funcExec = (arr, value) => arr.reduce((acc, item) => (typeof item === "function" ? item(acc, value) : acc), value ?? 0);
