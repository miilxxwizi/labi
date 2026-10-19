let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];
let duplicates = [];

for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
        if (values[i] == values[j] && !duplicates.includes(values[i])) {
            duplicates.push(values[i]);
        }
    }
}

if (duplicates.length > 0) {
    console.log('Одинаковые элементы:', duplicates);
} else {
    console.log('Одинаковых элементов нет');
}
