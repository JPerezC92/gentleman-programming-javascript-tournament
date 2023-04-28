// 1-Dado un array de números, escribir una función que encuentre el número más grande.

const findMax = (list: number[]): number => {
  if (list.length === 0) {
    throw new Error("Empty list");
  }

  let max: number = list[0];

  const listWithoutFirstElement = list.slice(1);

  for (let index = 0; index < listWithoutFirstElement.length; index++) {
    const element = listWithoutFirstElement[index];

    if (element > max) {
      max = element;
    }
  }

  return max;
};

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findMax([1, 2, 3, 434, 5, 436, 437, 34, 48, 9, 100]));
