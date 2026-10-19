let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let max = values[0];

for (let element of values) {
    if (element > max) {
        max = element;
    }
}

console.log('Максимальное значение массива - ' + max);
