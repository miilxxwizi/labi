let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
let evenValues = [];
let oddValues = [];

for (let value of values) {
    if (value % 2 == 0) {
        evenValues.push(value);
    } else {
        oddValues.push(value);
    }
}

console.log('Четные значения:', evenValues);
console.log('Нечетные значения:', oddValues);
