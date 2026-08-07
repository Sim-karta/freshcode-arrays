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
