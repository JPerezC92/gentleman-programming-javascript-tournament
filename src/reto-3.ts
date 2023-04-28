// 3-Dado un array de números, escribir una función que calcule la suma de todos los elementos.

function sumOfList(list: number[]): number {
  return list.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfList([11, 22, 3, 4, 5, 6, 7, 8, 9]));
console.log(sumOfList([11, 2, 3, 434, 5, 436, 437, 34, 48, 9, 100]));
