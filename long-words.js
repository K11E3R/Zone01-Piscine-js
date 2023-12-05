const longWords = arr => arr.every(item => item.length >= 5);

const oneLongWord = arr => arr.some(item => item.length >= 10);

const noLongWords = arr => arr.every(item => item.length < 7);
