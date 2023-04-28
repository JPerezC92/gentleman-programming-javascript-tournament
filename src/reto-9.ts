// 9-Dado un array de números y un número objetivo, escribir una función que encuentre dos números en el array que sumen el número objetivo.

function findTwoNumbersWhoSumTarget(list: number[], target: number) {
  const result = [];

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    const elementToFind = target - element;
    const listWithoutElement = list.filter((_, i) => i !== index);

    if (listWithoutElement.includes(elementToFind)) {
      result.push(element);
      result.push(elementToFind);
      break;
    }
  }

  return result;
}

console.log(findTwoNumbersWhoSumTarget([1, 5, 2, 3, 4, 5], 10)); // [5, 5];
console.log(findTwoNumbersWhoSumTarget([1, 2, 3, 4, 5], 10)); // [];
console.log(
  findTwoNumbersWhoSumTarget([1, 2, 3, 4, 5, 5, 5, 5, 5, 1, 2, 3, 4, 5], 3)
);
