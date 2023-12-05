const map = (arr, action) => arr.map((item, i) => action(item, i, arr));

const flatMap = (arr, action) => arr.flatMap((item, i) => action(item, i, arr));
