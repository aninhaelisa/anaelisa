const botaoHamburguer = document.getElementById("botaoHamburguer");
const menuHamburguer = document.getElementById("menuHamburguer");

botaoHamburguer.addEventListener("click", () => {
  botaoHamburguer.classList.toggle("ativo");
  menuHamburguer.classList.toggle("ativo");
});

document.querySelectorAll('.btn-brilhante').forEach(btn => {
    if (!btn) return; // garante que existe
  
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y + 'px');
    });
  });

