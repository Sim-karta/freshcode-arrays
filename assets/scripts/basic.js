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
