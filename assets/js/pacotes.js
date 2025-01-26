const botaoReservar = document.querySelectorAll('.search-button');

// Função que mostra um alerta quando o botão de 'Reservar' for clicado.
botaoReservar.forEach(botao => {
    botao.addEventListener('click', (e) => {
      e.preventDefault(); // Impede navegação imediata
      alert('Obrigado por escolher este pacote! Você será redirecionado para o formulário de reservas.');
      window.location.href = '4.reservas.html'; // Redireciona após o alerta
    });
  });



// Notificação dos mais procurados com animação dos icones de fogo
document.addEventListener('DOMContentLoaded', () => {
    const fireIcons = document.querySelectorAll('.fire');
  
    fireIcons.forEach(icon => {
      // Adiciona uma classe que ativa a animação
      icon.classList.add('animate-fire');
    });
  });


// Troca o texto do botão de 'Reservar' para 'Reservando' quando clicado
botaoReservar.forEach(botao => {
    botao.addEventListener('click', (e) => {
      e.preventDefault();
      botao.textContent = 'Reservando...';
      botao.disabled = true;
  
      setTimeout(() => {
        window.location.href = '4.reservas.html';
      }, 2000);
    });
  });

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
