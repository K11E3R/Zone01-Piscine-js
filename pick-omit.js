function pick(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => (typeof keys === "string" ? keys.includes(key) : keys.includes(key))));
}

function omit(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => (typeof keys === "string" ? !keys.includes(key) : !keys.includes(key))));
}
