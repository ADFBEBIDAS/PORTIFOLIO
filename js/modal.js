// Função para criar o cookie com a resposta
function setAgeCookie(value) {
  document.cookie = `isAdult=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

// Função para verificar se o cookie já existe
function checkAgeCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('isAdult=')) {
      const value = cookie.substring('isAdult='.length);
      return value === 'true';
    }
  }
  document.body.style.overflow = 'auto';
  return false;
}

// Função para exibir o modal
function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Função para ocultar o modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Verifica se o cookie existe ao carregar a página
window.onload = function() {
  if (!checkAgeCookie()) {
    showModal();
  }
};

// Adiciona os event listeners aos botões do modal
document.getElementById('maiorIdadeBtn').addEventListener('click', function() {
  setAgeCookie(true);
  document.body.style.overflow = 'auto';
  hideModal();
});

document.getElementById('menorIdadeBtn').addEventListener('click', function() {
  setAgeCookie(false);
  document.body.style.overflow = 'auto';
  hideModal();
});