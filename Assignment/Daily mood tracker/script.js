function logMood(mood) {
  const moodlist = JSON.parse(localStorage.getItem("mood-list")) || [];
  const date = new Date().toLocaleDateString();
  const time = new Date();

  moodlist.push({
    date: date,
    mood: mood,
    time: {
      hr: time.getHours() % 12,
      m: time.getMinutes(),
      s: time.getSeconds(),
    },
  });
  localStorage.setItem("mood-list", JSON.stringify(moodlist));
  showMoodLoggedPopup();
}

function displayMoodTimeLine(range) {
  const moodlist = JSON.parse(localStorage.getItem("mood-list")) || [];
  let filteredMoodList;
  if (range === "Day") {
    const todaysDate = new Date().toLocaleDateString();
    filteredMoodList = moodlist.filter((individualMood) => {
      return individualMood.date === todaysDate;
    });
  } else if (range === "Week") {
    const startWeekDate = getStartWeekDate();
    filteredMoodList = moodlist.filter((individualMood) => {
      return individualMood.date >= startWeekDate;
    });
  } else {
    const startMonthDate = getStartMonthDate();
    filteredMoodList = moodlist.filter((individualMood) => {
      return individualMood.date >= startMonthDate;
    });
  }
  showMoodTimeLine(filteredMoodList);
}

function getStartWeekDate() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diffToSunday = dayOfWeek === 0 ? 0 : dayOfWeek;
  today.setDate(today.getDate() - diffToSunday);
  return today.toLocaleDateString();
}

function getStartMonthDate() {
  const today = new Date();
  today.setDate(1);
  return today.toLocaleDateString();
}

function showMoodTimeLine(moodList) {
  if (Object.keys(moodList).length === 0) {
    return;
  }

  document.getElementById(
    "mood-time-line"
  ).innerHTML = ` <img id="cancel-btn" src="./assets/cancel.png" alt="" />`;

  for (const mood of moodList) {
    console.log(mood.time);

    document.getElementById(
      "mood-time-line"
    ).innerHTML += `<span class="mood">${mood.date} <small class="time">(${mood.time["hr"]}:${mood.time["m"]}:${mood.time["s"]})</small>: ${mood.mood}</span>`;
  }
  document.getElementById("mood-time-line").style.padding = "25px 10px";
  document.getElementById("cancel-btn").addEventListener("click", () => {
    document.getElementById("mood-time-line").innerHTML = "";
    document.getElementById("mood-time-line").style.padding = 0;
  });
}

function showMoodLoggedPopup() {
  const popup = document.getElementById("mood-logged-popup");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}
