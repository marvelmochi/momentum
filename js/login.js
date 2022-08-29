const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");

function onSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);

  loginInput.value = "";
  saveName(loginInput.value);
}

function saveName(name) {
  localStorage.setItem("name", name);
  console.log("hello", name);
}
loginForm.addEventListener("submit", onSubmit);
