// Função para que as imagens aumentem de tamanho ao passar o cursor

document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });


// Função para o contador decrescente de tempo para as promoções
  const countdownElement = document.querySelector('.countdown');
  const endDate = new Date('2025-02-25T00:00:00').getTime();
  
  setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
    if (timeLeft < 0) {
      countdownElement.textContent = 'Promoção Expirada!';
    }
  }, 1000);


  
// Função para controlar o piscar da palavra 'Promoções'
function startBlinking() {
    const promocoes = document.getElementById('promocoes');
    promocoes.classList.add('blinking'); // Adiciona a classe 'blinking' para iniciar a animação
  }
  
  // Parar o piscar
  function stopBlinking() {
    const promocoes = document.getElementById('promocoes');
    promocoes.classList.remove('blinking'); // Remove a classe 'blinking' para parar a animação
  }
  
  // Começa a piscar após 2 segundos
  setTimeout(startBlinking, 2000);
  
  // Pára de piscar após 30 segundos
  setTimeout(stopBlinking, 30000);

