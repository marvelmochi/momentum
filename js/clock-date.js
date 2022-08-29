const clock = document.querySelector("#clock h1");
const dateDiv = document.getElementById("date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  if (hours === "00" && minutes === "00" && seconds === "00") {
    getDates(); // 정각에 날짜 변경
  }
}

function getDates() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  dateDiv.innerText = `${year}.${month}.${day}`;
}

getClock();
setInterval(getClock, 1000);

getDates();
