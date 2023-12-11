function fusion(obj1, obj2) {
    const fusioned = {};

    const mergeObjects = (source, target) => {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                fusioned[key] = target.hasOwnProperty(key) && is.obj(source[key]) && is.obj(target[key]) ?
                    mergeObjects(source[key], target[key]) :
                    is.arr(source[key]) && is.arr(target[key]) ? source[key].concat(target[key]) :
                    is.num(source[key]) && is.num(target[key]) ? source[key] + target[key] :
                    is.str(source[key]) && is.str(target[key]) ? source[key] + " " + target[key] :
                    target[key];
            }
        }
    };

    mergeObjects(obj1, fusioned);
    mergeObjects(obj2, fusioned);

    return fusioned;
}

const is = {
    num: n => typeof n === "number",
    str: n => typeof n === "string",
    arr: n => Array.isArray(n),
    obj: n => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null,
    fun: n => typeof n === "function"
};
