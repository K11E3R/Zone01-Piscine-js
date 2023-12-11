const replica = (...objs) => objs.reduce((res, obj) => {
    Object.keys(obj).forEach(key => {
        if (Object.prototype.toString.call(obj[key]).slice(8, -1) === 'Object') {
            res[key] = replica(res[key] || {}, obj[key]);
        } else if (Array.isArray(obj[key])) {
            res[key] = obj[key].map(item => Object.prototype.toString.call(item).slice(8, -1) === 'Object' ? replica({}, item) : item);
        } else if (Object.prototype.toString.call(res[key]).slice(8, -1) === 'Object' && Object.prototype.toString.call(obj[key]).slice(8, -1) === 'Object') {
            Object.keys(obj[key]).forEach(val => res[key][val] = obj[key][val]);
        } else {
            res[key] = obj[key];
        }
    });
    return res;
}, {});
