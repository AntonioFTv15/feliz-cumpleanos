


// 🎲 Mensajes variables
const messageSets = [
  [
    "🎁 Abriendo tu regalo...",
    "✨ Buscando algo especial...",
    "💭 Pensando en palabras bonitas...",
    "😊 Porque alguien como tú lo merece..."
  ],
  [
    "🎁 Preparando una sorpresa...",
    "🌸 Algo bonito viene en camino...",
    "💫 Ajustando los últimos detalles...",
    "💖 Hecho con cariño, solo para ti..."
  ],
  [
    "🎁 Un momento por favor...",
    "✨ Esto merece calma...",
    "🌟 Porque los mejores regalos no se apuran...",
    "😊 Ya casi, promesa..."
  ]
];

// 🔊 Sonido suave
const softSound = new Audio("assets/audio/soft.mp3");
softSound.volume = 0.25;

// ⏳ Utilidad
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ✍️ Nombre letra por letra
async function typeName(text) {
  const el = document.getElementById("name");
  el.textContent = "";

  for (const char of text) {
    el.textContent += char;
    playSoftSound();
    await wait(120);
  }
}

// 🎲 Mensajes aleatorios
function getRandomMessages() {
  return messageSets[Math.floor(Math.random() * messageSets.length)];
}

function playSoftSound() {
  softSound.currentTime = 0;
  softSound.play();
}

// 🚀 Inicio experiencia
function startExperience() {
  typeName(CONFIG.name);

  setTimeout(() => {
    document.querySelector(".title").classList.add("show");
  }, 400);

  document.getElementById("giftBtn").addEventListener("click", openGift);
}

// 🎁 Juego del regalo
async function openGift() {
  launchConfetti();

  const card = document.getElementById("card");
  const message = document.getElementById("cardMessage");
  const photos = document.getElementById("photoStack");

  card.classList.add("show");
  if (photos) {
    photos.classList.add("show");
  }
  message.innerHTML = "";

  const lines = getRandomMessages();

  for (const line of lines) {
    const span = document.createElement("span");
    span.innerHTML = line;
    message.appendChild(span);
    playSoftSound();
    await wait(900);
  }

  await wait(1200);

  message.innerHTML = `
    <span>
      💖 ${CONFIG.name},<br><br>
      Hoy celebramos tu forma de ser,<br>
      tu sonrisa inesperada<br>
      y todo lo bonito que dejas sin darte cuenta.<br><br>
      Que este nuevo año
      te sorprenda tanto
      como tú sorprendes al mundo. ✨
    </span>
  `;
}
