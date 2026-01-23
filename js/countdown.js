function startCountdown() {
  let counter = CONFIG.countdownSeconds;
  const counterEl = document.getElementById("counter");

  const interval = setInterval(() => {
    counterEl.textContent = counter;
    counter--;

    if (counter < 0) {
      clearInterval(interval);
      changeScene("countdown", "experience");
      startExperience();
    }
  }, 1000);
}
