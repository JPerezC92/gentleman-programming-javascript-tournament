// 8-Dado un array de números, escribir una función que elimine todos los números duplicados y devuelva el array resultante sin duplicados.

function filterDuplicatesOfList(list: number[]): number[] {
  return Array.from(new Set(list));
}

console.log(filterDuplicatesOfList([1, 2, 3, 4, 5, 5, 5, 5, 5]));
console.log(filterDuplicatesOfList([1, 2, 3, 4, 5, 5, 5, 5, 5, 1, 2, 3, 4, 5]));
