let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = '';
    
    for (let j = 0; j < rows - i; j++) {
        line += ' ';
    }
    
    for (let k = 0; k < (2 * i - 1); k++) {
        line += '*';
    }
    
    console.log(line);
}