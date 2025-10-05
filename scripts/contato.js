const sendBtn = document.getElementById('sendBtn');
const errorMsg = document.getElementById('error-msg');

sendBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    errorMsg.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  errorMsg.textContent = "";

  // Envia para WhatsApp
  window.open(`https://wa.me/5544997200148?text=Mensagem de ${encodeURIComponent(name)}: ${encodeURIComponent(message)}`, '_blank');
});
/*/-------------------------------------------------------------------------------------------------*/