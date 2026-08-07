const arr1 = [-1, 5, 0, 9, -10];
const arr2 = [99, 5, 0, 9, 30];

const correctArr1 = arr1.filter((element) => {
    return element !== 0;
});

const correctArr2 = arr2.map((element) => {
    return element / 100;
});

console.dir(correctArr1);

console.dir(correctArr2);

arr2.forEach((element) => {
    console.log(element ** 3);
});

const element100InCube = arr1.findIndex((element) => {
    return element ** 2 === 100;
});

console.log(element100InCube !== -1 ? element100InCube : "Елемент не знайдено");
