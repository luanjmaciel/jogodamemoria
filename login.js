const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();
  
  // Salva o nome do jogador no localStorage
  localStorage.setItem('player', input.value);

  // Redireciona para a página de níveis
  window.location = './niveis.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
