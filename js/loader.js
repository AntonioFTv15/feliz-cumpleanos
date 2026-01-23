setTimeout(() => {
  changeScene("loader", "countdown");
  startCountdown();
}, 2000);

function changeScene(from, to) {
  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");
}
