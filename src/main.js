const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function pad(value) {
  return String(value).padStart(2, "0");
}

function refreshClock() {
  const now = new Date();
  timeEl.textContent = [
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds())
  ].join(":");
  dateEl.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

refreshClock();
setInterval(refreshClock, 200);
