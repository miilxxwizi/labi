const coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию:');

let coffeeIndex = coffees.findIndex((coffee) => {
    return coffeeName !== null && coffee.toLowerCase() == coffeeName.trim().toLowerCase();
});

if (coffeeIndex >= 0) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}
