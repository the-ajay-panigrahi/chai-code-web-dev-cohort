const input = document.getElementById("input");

function btnClicked(value) {
  input.value += value;
}

function clearDisplay() {
  input.value = "";
}

function calculate() {
  try {
    input.value = math.evaluate(input.value);
    // input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
    console.log("Error ", error);
  }
}
