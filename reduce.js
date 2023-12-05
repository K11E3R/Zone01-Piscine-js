const fold = (arr, f, acc) => arr.reduce((acc, item, i) => f(acc, item, i, arr), acc);

const foldRight = (arr, f, acc) => arr.reduceRight((acc, item, i) => f(acc, item, i, arr), acc);

const reduce = (arr, f) => arr.slice(1).reduce((acc, item, i) => f(acc, item, i + 1, arr), arr[0]);

const reduceRight = (arr, f) => arr.slice(0, -1).reduceRight((acc, item, i) => f(acc, item, i, arr), arr[arr.length - 1]);
