// 6-Dado un string, escribir una función que encuentre la palabra más larga en el string.

function findLongerWord(str: string): string {
  const wordList = str.split(" ");
  let word = "";

  for (let index = 0; index < wordList.length; index++) {
    const element = wordList[index];
    if (element.length > word.length) {
      word = element;
    }
  }

  return word;
}

console.log(findLongerWord("Hola mundo desde el reto 5"));
console.log(findLongerWord("Gentleman Programming"));
