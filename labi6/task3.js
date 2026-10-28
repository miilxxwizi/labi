let button = document.getElementById('alert-generator');
let alerts = document.querySelector('.alerts');
let count = 0;

button.addEventListener('click', () => {
    count++;

    let alert = document.createElement('div');
    alert.className = 'alert alert-primary';
    alert.textContent = 'Alert ' + count;

    alerts.prepend(alert);
});
