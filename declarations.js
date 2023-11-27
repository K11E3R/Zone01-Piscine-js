const escapeStr = "`\\/\"'";
const arr = [4,'2'];
const a = {
    str : "not constant",
    num : 0,
    bool : false,
    undef : undefined
};
const obj = Object.freeze(a);
const nested = {
    arr : [4,undefined,'2'],
    obj
};
Object.freeze(nested);
Object.freeze(nested.arr);
