const arr = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

console.dir(arr);

arr.pop();
arr.shift();

console.dir(arr);

const num1 = Number(prompt("Введіть перше число"));
const num2 = Number(prompt("Введіть друге число"));

arr.unshift(num1);
arr.push(num2);

console.dir(arr);

const arrayCopy1 = arr.slice();
const arrayCopy2 = [...arr];
const arrayCopy3 = Array.from(arr);

const smallArrayCopy = arr.slice(0, 4);

console.dir(arrayCopy1);
console.dir(arrayCopy2);
console.dir(arrayCopy3);

console.dir(smallArrayCopy);
