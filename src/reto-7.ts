// 7-Dado un string y un número n, escribir una función que trunque el string a n caracteres y agregue "..." al final.

function truncateStr(str: string, n: number): string {
  const ellipsis = "...";
  let strTruncated = "";

  const endIndexOfStr = n < ellipsis.length ? 0 : n - ellipsis.length;

  strTruncated = str.substring(0, endIndexOfStr) + ellipsis;

  return strTruncated;
}

console.log(truncateStr("Hola mundo desde el reto 5", 10));
console.log(truncateStr("Gentleman Programming", 5));
