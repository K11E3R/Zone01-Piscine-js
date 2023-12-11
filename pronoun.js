function pronoun(elem_string) {
    let pronouns = ["i", "you", "he", 'she', "it", 'they', 'we'] //, "I", "You", "He", 'She', "It", 'They', 'We']
    let res = {};
    let words = elem_string.toLowerCase().split(/\W/g).filter(x => x !== '');
    words.forEach((wordP, i) => {
        if (pronouns.includes(wordP)) {
            if (res[wordP] === undefined) {
                //Find the next word and check it isnt a pronoun
                let toAdd = words[words.indexOf(wordP) + 1]
                pronouns.includes(toAdd) ? toAdd = [] : toAdd = [toAdd];
                if (toAdd[0] === undefined) toAdd = [];
                res[wordP] = {
                    word: toAdd,
                    count: 1
                };
            } else {
                //Update the words value
                let nexttoAdd = words[(words.indexOf(wordP, i ) + 1)]
                let currWord = res[wordP].word
                pronouns.includes(nexttoAdd) ? nexttoAdd = [] : nexttoAdd = [nexttoAdd];
                res[wordP].word = currWord.concat(nexttoAdd)  
                let currCount = res[wordP].count + 1 
                res[wordP].count = currCount
            }
        }
    })
    return res
}