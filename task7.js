const arr = [1, '!', 'qwerty', 2, 3, null, 4, undefined, 5, false];
let evenCount = 0;
let oddCount = 0;
for (const it of arr) {
    if (typeof it === 'number' || typeof it === 'bigint') {
        if (it === 0) {
            console.log('В массиве присутствует элемент равный нулю(0)');
        }
        if (it % 2 === 0) {
            evenCount++;
        }
        if (it % 2 !== 0) {
            oddCount++;
        }
    } else {
        console.log(`Элемент массива <${it}> не является числом`);
    }
}
console.log(`Количество четных чисел: ${evenCount}`);
console.log(`Количество нечетных чисел: ${oddCount}`);
