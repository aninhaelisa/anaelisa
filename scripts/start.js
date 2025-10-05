// ------------------- CONSTS -------------------
const fundo = document.getElementById('quadrados-fundo');
const numeroQuadrados = 10;
const quadrados = [];
const digitarElemento = document.getElementById('digitação');
const frases = [
  "Bem-vindo ao meu portfólio!",
  "Aqui compartilho minha paixão por design e desenvolvimento.",
  "E este é meu espaço criativo..."
];
const sobreContainer = document.querySelector('.sobre-container');
const velocidadeDigitar = 100;
const velocidadeApagar = 50;
const delayEntreFrases = 1500;

// ------------------- CRIAÇÃO DE QUADRADOS -------------------
for (let i = 0; i < numeroQuadrados; i++) {
  const quad = document.createElement('div');
  quad.classList.add('quadrado');

  const posX = Math.random() * window.innerWidth;
  const posY = Math.random() * window.innerHeight;
  const speedX = (Math.random() - 0.5) * 0.5;
  const speedY = (Math.random() - 0.5) * 0.5;

  fundo.appendChild(quad);

  quadrados.push({
    element: quad,
    x: posX,
    y: posY,
    speedX,
    speedY
  });
}

// ------------------- FUNÇÃO DE ANIMAÇÃO -------------------
function animar() {
  quadrados.forEach(q => {
    q.x += q.speedX;
    q.y += q.speedY;

    if (q.x < -150 || q.x > window.innerWidth) q.speedX *= -1;
    if (q.y < -150 || q.y > window.innerHeight) q.speedY *= -1;

    q.element.style.transform = `translate(${q.x}px, ${q.y}px)`;
  });

  requestAnimationFrame(animar);
}

// ------------------- FUNÇÃO DE DIGITAÇÃO -------------------
let fraseIndex = 0;
let charIndex = 0;
let apagando = false;

function digitar() {
  const fraseAtual = frases[fraseIndex];

  if (!apagando) {
    digitarElemento.textContent = fraseAtual.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === fraseAtual.length) {
      apagando = true;
      setTimeout(digitar, delayEntreFrases);
    } else {
      setTimeout(digitar, velocidadeDigitar);
    }
  } else {
    digitarElemento.textContent = fraseAtual.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      apagando = false;
      fraseIndex = (fraseIndex + 1) % frases.length;
      setTimeout(digitar, 500);
    } else {
      setTimeout(digitar, velocidadeApagar);
    }
  }
}

// ------------------- OBSERVER PARA SOBRE -------------------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('ativo');
  });
}, { threshold: 0.2 });

observer.observe(sobreContainer);

// ------------------- HABILITAÇÃO DE SKILLS -------------------
window.addEventListener('load', () => {
  const skills = document.querySelectorAll('.skill-bar span');
  skills.forEach(skill => {
    skill.style.height = skill.getAttribute('data-percent');
  });
});

// ------------------- INICIA ANIMAÇÃO E DIGITAÇÃO -------------------
animar();
digitar();