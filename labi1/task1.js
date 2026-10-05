let age = 30;

if (age >= 18 && age <= 59) {
    console.log("Вам еще работать и работать");
} else if (age > 59) {
    console.log("Вам пора на пенсию");
} else if (age >= 1 && age <= 17) {
    console.log("Вам работать еще рано - учитесь");
} else {
    console.log("Некорректный возраст");
}