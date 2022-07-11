const containerEl = document.querySelector(".container");
const color1El = document.querySelector(".color-1");
const color2El = document.querySelector(".color-2");

color2El.addEventListener("click", function () {
  containerEl.classList.add("change");
});

color1El.addEventListener("click", function () {
  containerEl.classList.remove("change");
});
