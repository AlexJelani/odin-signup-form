const alert = document.querySelector(".password-alert");
const myInput = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");






confirm.addEventListener("keyup", (e) => {
  if (myInput.value == confirm.value) {
    alert.style.display = "none";
    document.querySelector('input[type="password"]:focus').style.outlineColor =
    "green";
  } else {
    alert.style.display ="inline-block"
  }
});
