const nameInput = document.getElementById("exampleInput");
const reviewInput = document.getElementById("exampleInput2");
const rightSideContainer = document.getElementById("right");
const submitBtn = document.getElementById("submit");

const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");

let rating = 0;

function setStarRatings(stars) {
  rating = stars;
  if (stars >= 1) {
    star1.style.color = "gold";
  } else {
    star1.style.color = "gray";
  }
  if (stars >= 2) {
    star2.style.color = "gold";
  } else {
    star2.style.color = "gray";
  }
  if (stars >= 3) {
    star3.style.color = "gold";
  } else {
    star3.style.color = "gray";
  }
  if (stars >= 4) {
    star4.style.color = "gold";
  } else {
    star4.style.color = "gray";
  }
  if (stars >= 5) {
    star5.style.color = "gold";
  } else {
    star5.style.color = "gray";
  }
}

function resetStars() {
  rating = 0;
  star1.style.color = "gray";
  star2.style.color = "gray";
  star3.style.color = "gray";
  star4.style.color = "gray";
  star5.style.color = "gray";
}

star1.addEventListener("click", () => {
  setStarRatings(1);
});
star2.addEventListener("click", () => {
  setStarRatings(2);
});
star3.addEventListener("click", () => {
  setStarRatings(3);
});
star4.addEventListener("click", () => {
  setStarRatings(4);
});
star5.addEventListener("click", () => {
  setStarRatings(5);
});

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
            <p class="card-text">
              ${"⭐".repeat(
                rating
              )}${`<i style="font-size:14px" class="fa-solid fa-star"></i>`.repeat(
      5 - rating
    )}
            </p>
          </div>
        </div>
     `;

    nameInput.value = "";
    reviewInput.value = "";
    resetStars();
  }
});
