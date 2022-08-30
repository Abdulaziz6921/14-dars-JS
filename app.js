let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let lastNameInput = document.querySelector("#lname");
let passwordInput = document.querySelector("#password");
let H1 = document.getElementById("h1");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    nameInput.value.trim() === "" ||
    lastNameInput.value.trim() === "" ||
    passwordInput.value.trim() === ""
  ) {
    alert("iltimos bosh joylarni tuldiring");
  } else {
    H1.innerHTML =
      nameInput.value +
      "<br> " +
      lastNameInput.value +
      "<br>" +
      passwordInput.value;

    nameInput.value = "";
    lastNameInput.value = "";
    passwordInput.value = "";
  }
});
