const containerEl = document.querySelector(".container");
const toggleEl = document.querySelector(".toggle");

toggleEl.addEventListener("click", function () {
  containerEl.classList.toggle("dark")
    ? (toggleEl.firstElementChild.className = "fas fa-moon")
    : (toggleEl.firstElementChild.className = "fas fa-sun");
});
