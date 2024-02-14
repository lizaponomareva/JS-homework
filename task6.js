const arr = [1, 2, 3];
const isAllEqual = arr.every(function (element, array) {
    return element === array[0];
});

console.log(isAllEqual);