function replica(target, ...sources) {
    sources.forEach(source => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (Object.prototype.toString.call(source[key]).slice(8, -1) === 'Object') {
                    target[key] = target[key] || {};
                    replica(target[key], source[key]);
                } else if (Array.isArray(source[key])) {
                    target[key] = source[key].map(item =>
                        Object.prototype.toString.call(item).slice(8, -1) === 'Object'
                            ? replica({}, item)
                            : item
                    );
                } else {
                    target[key] = source[key];
                }
            }
        }
    });

    return target;
}