let user1 = new Object();
user1.firstName = 'Иван';
user1.lastName = 'Иванов';

let user2 = {
    firstName: 'Игорь',
    lastName: 'Петров'
};

function print(user) {
    console.log(user.lastName);
    console.log(user.firstName);
}

print(user1);
print(user2);
