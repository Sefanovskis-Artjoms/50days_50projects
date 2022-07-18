const signupModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signupX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");

const removeModals = function () {
  loginModal.classList.remove("display");
  signupModal.classList.remove("display");
  formContainer.classList.remove("disable");
};

signupBtn.addEventListener("click", () => {
  signupModal.classList.add("display");
  formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("display");
  formContainer.classList.add("disable");
});

signupX.addEventListener("click", () => {
  removeModals();
});

loginX.addEventListener("click", () => {
  removeModals();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && formContainer.classList.contains("disable")) {
    removeModals();
  }
});
