function pronoun(elem_string) {
    const pronouns = ["i", "you", "he", 'she', "it", 'they', 'we'];
    const res = {};
    const words = elem_string.toLowerCase().split(/\W/g).filter(Boolean);

    words.forEach((wordP, i) => {
        if (pronouns.includes(wordP)) {
            const nextWordIndex = words.indexOf(wordP) + 1;
            const wordToAdd = pronouns.includes(words[nextWordIndex]) ? [] : [words[nextWordIndex]].filter(Boolean);
            const count = res[wordP]?.count + 1 || 1;

            res[wordP] = {
                word: (res[wordP]?.word || []).concat(wordToAdd),
                count,
            };
        }
    });

    return res;
}
