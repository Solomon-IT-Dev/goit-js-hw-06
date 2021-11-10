const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', onDecrementButtonClick);
function onDecrementButtonClick() {
  counterValue.innerHTML = Number(counterValue.innerHTML) - 1;
  // * Второй вариант
  // counterValue.innerHTML--;
}

incrementButton.addEventListener('click', onIncrementButtonClick);
function onIncrementButtonClick() {
  counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
  // * Второй вариант
  // counterValue.innerHTML++;
}
