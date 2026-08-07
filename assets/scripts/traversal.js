const traversalGroup = document.querySelector(".traversal");
const filterNonzeroBtn = traversalGroup.querySelector(".filter-nonzero-btn");
const mapDivideBtn = traversalGroup.querySelector(".map-divide-btn");
const forEachCubeBtn = traversalGroup.querySelector(".forEach-cube-btn");
const findSquare100Btn = traversalGroup.querySelector(".find-square-100-btn");
const findGreater50Btn = traversalGroup.querySelector(".find-greater-50-btn");

const arr1 = [-1, 5, 0, 9, -10];
const arr2 = [99, 5, 0, 9, 30];

function filterNonZeroElements(arr) {
    return arr.filter((element) => element !== 0);
}

function divideElementsBy100(arr) {
    return arr.map((element) => element / 100);
}

function printCubeElements(arr) {
    arr.forEach((element) => {
        console.log(element ** 3);
    });
}

function findSquare100Element(arr) {
    return arr.findIndex((element) => element ** 2 === 100);
}

function findGreater50Element(arr) {
    return arr.find((element) => element > 50);
}

filterNonzeroBtn.addEventListener("click", () => {
    console.dir(filterNonZeroElements(arr1));
});
mapDivideBtn.addEventListener("click", () => {
    console.dir(divideElementsBy100(arr2));
});
forEachCubeBtn.addEventListener("click", () => {
    printCubeElements(arr2);
});
findSquare100Btn.addEventListener("click", () => {
    const square100Element = findSquare100Element(arr1);

    console.log(
        square100Element !== -1 ? square100Element : "Елемент не знайдено",
    );
});
findGreater50Btn.addEventListener("click", () => {
    const greater50Element = findGreater50Element(arr2);

    console.log(greater50Element);
});
