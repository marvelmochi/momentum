const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");
const greetings = document.querySelector("#login h2");

function onSubmit(event) {
  event.preventDefault();
  saveName(loginInput.value);
  loginInput.value = "";
}

function saveName(name) {
  localStorage.setItem("name", name);
  toggleHidden(loginForm);
  toggleHidden(greetings);

  paintName();
}

function paintName() {
  const name = localStorage.getItem("name");
  const date = new Date();
  const hours = date.getHours();
  let greeting = "";
  if (hours > 4 && hours < 12) {
    greeting = `Good Morning, ${name}!`;
  } else if (hours > 11 && hours < 18) {
    greeting = `Good Afternoon, ${name}!`;
  } else if (hours > 17 && hours < 22) {
    greeting = `Good Evening, ${name}!`;
  } else {
    greeting = `Have a Good Night, ${name}!`;
  }
  greetings.innerText = greeting;
}

function toggleHidden(element) {
  element.classList.toggle("hidden");
}

loginForm.addEventListener("submit", onSubmit);

if (localStorage.getItem("name") !== null) {
  toggleHidden(loginForm);
  toggleHidden(greetings);
  paintName();
}
