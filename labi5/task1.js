const groceries = {
    'Orange Juice': {
        price: 1.5,
        discount: 10
    },
    'Chocolate': {
        price: 2,
        discount: 0
    }
};

function getTotalPriceOfShoppingBag(shoppingBag) {
    let totalPrice = 0;

    for (let item of shoppingBag) {
        let product = groceries[item.product];
        let finalPrice = product.price * (1 - product.discount / 100);
        totalPrice += finalPrice * item.quantity;
    }

    return Number(totalPrice.toFixed(2));
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);
