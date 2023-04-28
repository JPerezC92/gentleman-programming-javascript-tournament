// 4-Dado un array de números, escribir una función que calcule el promedio de todos los elementos.

function averageOfList(list: number[]): number {
  return list.reduce((acc, curr) => acc + curr, 0) / list.length;
}

console.log(averageOfList([20, 20, 20, 20]));
console.log(averageOfList([20, 20, 10, 10]));
