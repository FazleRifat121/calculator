const display = document.getElementById("cal");

function appendToDisplay(input) {
  display.value += input;
}
function cls() {
  display.value = " ";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
