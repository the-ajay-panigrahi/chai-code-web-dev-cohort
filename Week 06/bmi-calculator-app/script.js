const calculateBtn = document.getElementById("calc");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const container = document.getElementById("res-container");

calculateBtn.addEventListener("click", () => {
  if (weightInput.value !== "" && heightInput.value !== "") {
    container.innerHTML = " ";
    weight = parseInt(weightInput.value);
    height = parseInt(heightInput.value);
    const bmi = weight / ((height / 100) * (height / 100));

    const result = document.createElement("div");

    if (bmi < 18.5) {
      result.innerHTML = `<div class="bmi-res">BMI - ${bmi}</div>
    <div class="bmi-cat" style="background-color:red">Under Weight</div>`;
    } else if (bmi < 25) {
      result.innerHTML = `<div class="bmi-res">BMI - ${bmi}</div>
    <div class="bmi-cat" style="background-color:green">Normal Weight</div>`;
    } else if (bmi < 30) {
      result.innerHTML = `<div class="bmi-res">BMI - ${bmi}</div>
    <div class="bmi-cat" style="background-color:yellow; color:black">Over Weight</div>`;
    } else {
      result.innerHTML = `<div class="bmi-res">BMI - ${bmi}</div>
    <div class="bmi-cat" style="background-color:red">Obese</div>`;
    }
    container.appendChild(result);

    weightInput.value = "";
    heightInput.value = "";
  }
});
