const buttons = document.querySelectorAll('.login__button'); // Seleciona todos os botões

// Função para lidar com o clique nos botões
const handleButtonClick = (event) => {
  const level = event.target.getAttribute('data-level'); // Obtém o valor de data-level
  if (level) {
    window.location = `./${level}`; // Redireciona para a página especificada
  }
};

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});
