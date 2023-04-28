// 5-Dado un string, escribir una función que invierta el orden de las palabras en el string.

function reverseWord(word: string): string {
  let reversedWord = "";

  for (let index = 0; index < word.length; index++) {
    const element = word[index];

    reversedWord = element + reversedWord;
  }

  return reversedWord;
}

console.log(reverseWord("Hola mundo desde el reto 5"));
console.log(reverseWord("Gentleman Programming"));
