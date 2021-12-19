let almiChoice = document.querySelector('#choice');
let almiPay = document.querySelectorAll('.pay');
let almiMonth = document.querySelectorAll('.month');
let almiBold = document.querySelectorAll('.almi-bold');
let chevronToggle = document.querySelector('.almi-chevron-toggle');
let currentOrder;
let prevOrder;

almiChoice.addEventListener('click', e => {
    if (e.target.tagName == 'IMG') {

        chevronToggle.classList.remove('order-1', 'order-2', 'order-3');
        prevOrder = currentOrder;
        if (e.target.parentElement.innerText == '10 000\n\n ') {
            currentOrder = 1;
            chevronToggle.classList.add('order-1');
            almiPay.forEach(element => element.innerText = '3361 ');
            almiMonth.forEach(element => element.innerText = '3 ');
        } else if (e.target.parentElement.innerText == '25 000\n\n ') {
            currentOrder = 2;
            almiPay.forEach(element => element.innerText = '4227 ');
            almiMonth.forEach(element => element.innerText = '6 ');
            chevronToggle.classList.add('order-2');
        } else if (e.target.parentElement.innerText == '50 000\n\n ') {
            currentOrder = 3;
            almiPay.forEach(element => element.innerText = '4280 ');
            almiMonth.forEach(element => element.innerText = '12 ');
            chevronToggle.classList.add('order-3');
        }

        let desktop = window.screen.width >= 768;

        let isSameOrder = prevOrder === currentOrder;
        almiBold.forEach(element => element.classList.remove('fw-bold'));
        if (isSameOrder) {
            if (chevronToggle.classList.contains('d-none')) {
                chevronToggle.classList.remove('d-none');

                e.target.parentElement.classList.add('fw-bold');
            } else {
                if (desktop) {
                    e.target.parentElement.classList.add('fw-bold');
                }
                chevronToggle.classList.add('d-none');
            }
        } else {
            chevronToggle.classList.remove('d-none');
            e.target.parentElement.classList.add('fw-bold');
        }
    }


})