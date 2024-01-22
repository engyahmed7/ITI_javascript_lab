let closeIcon = document.getElementById("close");
let setAlarmBtn = document.getElementById("setAlarmBtn");
let alarmOption = document.getElementById("alarmOption");

setAlarmBtn.addEventListener("click", () => {
  alarmOption.classList.remove("d-none");
});

closeIcon.addEventListener("click", () => {
  alarmOption.classList.add("d-none");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    alarmOption.classList.add("d-none");
  }
});

var digital_watch = document.getElementById("digital-watch");

function getTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  // hours = hours % 12 || 12;

  // const formattedTime = `${hours} : ${minutes} : ${seconds} ${ampm}`;

  // digital_watch.innerHTML = formattedTime;

  digital_watch.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm} `;

  if (alarmTime && alarmTime === `${hours}:${minutes}:${seconds}`) {
    alert("TIMEOUT!");
    clearTimeout(alarmTimeout);
    alarmTime = null;
  }
}

setInterval(getTime, 1000);

let alarmTime;
let alarmTimeout;

function setAlarm() {
  var getHours = document.getElementById("hours");
  var getMinutes = document.getElementById("minutes");
  var getSeconds = document.getElementById("seconds");

  alarmTime = `${getHours.value}:${getMinutes.value}:${getSeconds.value}`;

  alert(`Alarm set for ${alarmTime}`);

  const now = new Date();
  const timeToAlarm =
    new Date(
      parseInt(alarmTime.split(":")[0]),
      parseInt(alarmTime.split(":")[1]),
      parseInt(alarmTime.split(":")[2])
    ) - now;
  console.log(timeToAlarm);
  console.log(now);

  alarmTimeout = setTimeout(() => {
    alarmTime = null;
  }, timeToAlarm);
}

function clearAlarm() {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
    alarmTime = null;
}
