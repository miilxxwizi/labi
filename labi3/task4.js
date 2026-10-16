let obj1 = {
    firstName: 'Ivan',
    lastName: 'Ivanov',

    print: function () {
        console.log('First Name: ' + this.firstName);
        console.log('Last Name: ' + this.lastName);
    }
};

obj1.print();
