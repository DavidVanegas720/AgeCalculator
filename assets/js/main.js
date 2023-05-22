let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let yearsScreen = document.getElementById("years");
let monthsScreen = document.getElementById("monthsscreen");
let daysScreen = document.getElementById("daysscreen");


year.addEventListener("input", () => {
  yearsScreen.innerHTML =   "<h2>" + `${2023 - year.value} Years</h2>`;
  });

  
month.addEventListener("input", () => {
  monthsScreen.innerHTML =   "<h2>" + `${12 - month.value} Months</h2>`;
  });

day.addEventListener("input", () => {
  daysScreen.innerHTML =   "<h2>" + `${31 - day.value} Days</h2>`;
  });




