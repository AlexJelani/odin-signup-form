// const alert = document.querySelector(".password-alert");
// const myInput = document.querySelector("#password");

// const confirm = document.querySelector("#confirm");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const form = document.getElementById("form");

let passwordsMatch = false;

function validatePassword() {
  //check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    message.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  if (passwordsMatch) {
    message.textContent = "Successful Password";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    
    
  }
}
function resetMessage() {
    message.textContent = "";
    message.style.color = "none"
    message.style.borderColor = "none";
}
function processForm(e) {
  e.preventDefault();
  validatePassword();
}
//Event listener
form.addEventListener("keyup", processForm);

// confirm.addEventListener("keyup", (e) => {
//   if (myInput.value == confirm.value) {
//     alert.style.display = "none";
//     document.querySelector('input[type="password"]:focus').style.outlineColor =
//     "green";
//   } else {
//     alert.style.display ="inline-block"
//   }
// });
