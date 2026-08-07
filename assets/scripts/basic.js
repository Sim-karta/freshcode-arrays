const basicOperationGroup = document.querySelector(".basic-oper");
const printArrayBtn = basicOperationGroup.querySelector(".print-array-btn");
const removeExtremeElBtn = basicOperationGroup.querySelector(
    ".remove-extreme-el-btn",
);
const addExtremeElBtn = basicOperationGroup.querySelector(
    ".add-extreme-el-btn",
);
const printArrayCopiesBtn = basicOperationGroup.querySelector(
    ".print-array-copies-btn",
);

const arr = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

const arrayCopy1 = arr.slice();
const arrayCopy2 = [...arr];
const arrayCopy3 = Array.from(arr);

const smallArrayCopy = arr.slice(0, 4);

function printArray() {
    console.dir(arr);
}

function removeExtremeElements() {
    arr.pop();
    arr.shift();
}

function addExtremeElements(num1, num2) {
    arr.unshift(num1);
    arr.push(num2);
}

function printArrayCopies() {
    console.dir(arrayCopy1);
    console.dir(arrayCopy2);
    console.dir(arrayCopy3);

    console.dir(smallArrayCopy);
}

printArrayBtn.addEventListener("click", printArray);
removeExtremeElBtn.addEventListener("click", removeExtremeElements);
addExtremeElBtn.addEventListener("click", () => {
    const num1 = Number(prompt("Введіть перше число"));
    const num2 = Number(prompt("Введіть друге число"));
    addExtremeElements(num1, num2);
});
printArrayCopiesBtn.addEventListener("click", printArrayCopies);
