function pronoun(elem_string) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  const result = {};
  const words = elem_string.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 };
      }
      result[word].count += 1;
    // t 0
      if (i + 1 < words.length) {
        result[word].word.push(words[i + 1]);
      }
    }
  }

  return result;
}