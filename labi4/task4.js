let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let maxIndex = 0;
let minIndex = 0;

for (let i = 1; i < values.length; i++) {
    if (values[i] > values[maxIndex]) {
        maxIndex = i;
    }

    if (values[i] < values[minIndex]) {
        minIndex = i;
    }
}

let temp = values[maxIndex];
values[maxIndex] = values[minIndex];
values[minIndex] = temp;

console.log(values);
