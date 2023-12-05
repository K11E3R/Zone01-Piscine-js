const filterShortStateName = arr => arr.filter(item => item.length < 7);

const filterStartVowel = arr => arr.filter(item => /^[aeiou]/i.test(item));

const filter5Vowels = arr => arr.filter(item => item.match(/[aeiou]/gi).length >= 5);

const filter1DistinctVowel = arr => arr.filter(item => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1);

const multiFilter = arr => arr.filter(item => item.capital.length >= 8 && !/^[aeiou]/i.test(item.name) && /[aeiou]/i.test(item.tag) && item.region !== "South");
