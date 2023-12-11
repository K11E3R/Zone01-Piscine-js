function replica(tt, ...sources) {
    sources.forEach(source => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (Object.prototype.toString.call(source[key]).slice(8, -1) === 'Object') {
                    tt[key] = tt[key] || {};
                    replica(tt[key], source[key]);
                } else if (Array.isArray(source[key])) {
                    tt[key] = source[key].map(item =>
                        Object.prototype.toString.call(item).slice(8, -1) === 'Object'
                            ? replica({}, item)
                            : item
                    );
                } else {
                    tt[key] = source[key];
                }
            }
        }
    });

    return tt;
}