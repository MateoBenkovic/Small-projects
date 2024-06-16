let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

document.querySelector('.js-calculation').innerHTML = `${calculation}`;

function updateCalculation(number) {
  calculation += `${number}`;
  localStorage.setItem ('calculation', JSON.stringify(calculation));
  document.querySelector('.js-calculation').innerHTML = `${calculation}`;
}