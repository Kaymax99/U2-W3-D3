window.onload = () => {
  setTimeout(incrementCounter, 1000);
};

const counterP = document.getElementById("counterValue");
let currentCounterValue =
  parseInt(sessionStorage.getItem("savedCounterValue")) || 0;

const assignCounterValue = function () {
  counterP.innerText = currentCounterValue;
};
assignCounterValue();

const incrementCounter = function () {
  currentCounterValue = currentCounterValue + 1;
  assignCounterValue();
  sessionStorage.setItem("savedCounterValue", currentCounterValue);
  setTimeout(incrementCounter, 1000);
};
