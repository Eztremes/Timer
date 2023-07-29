var timerInterval;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("timer").textContent = timeString;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("timer").textContent = "00:00:00";
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
