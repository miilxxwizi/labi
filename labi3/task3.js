let user = {
    balance: '$1,250.89',
    age: 24,
    name: {
        first: 'Golden',
        last: 'Clements'
    },
    company: 'EWAVES',
    email: 'golden.clements@ewaves.io',
    friends: [
        {
            id: 0,
            name: 'Buchanan Austin'
        },
        {
            id: 1,
            name: 'Richmond Garrison'
        },
        {
            id: 2,
            name: 'Burns Cook'
        },
        {
            id: 3,
            name: 'Sally Mcpherson'
        }
    ],
    favoriteFruit: 'strawberry'
};

console.log(user.name.first);
console.log(user.name.last);

user.balance = '$2000';
delete user.email;

console.log(user);
