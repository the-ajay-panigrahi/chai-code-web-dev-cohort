const nameInput = document.getElementById("exampleInput");
const reviewInput = document.getElementById("exampleInput2");
const rightSideContainer = document.getElementById("right");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (nameInput.value !== "" && reviewInput.value !== "") {
    rightSideContainer.innerHTML += ` 
        <div class="card" style="width: 100%; margin-bottom:20px">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">${nameInput.value}</h5>
            <p class="card-text">
              ${reviewInput.value}
            </p>
          </div>
        </div>
     `;

    nameInput.value = "";
    reviewInput.value = "";
  }
});
