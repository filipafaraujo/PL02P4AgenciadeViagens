// Garante que o DOM está carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o formulário pelo ID
  const form = document.querySelector("#formulario-reserva");

  if (form) { // Verifica se o formulário existe no DOM
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Previne o envio padrão
      alert("Reserva efetuada com sucesso!"); // Mostra o alerta
    });
  } else {
    console.error("Formulário não encontrado!");
  }
});




// Função que reencaminha até o formulário e coloca o rato no campo de nome
document.getElementById('reservationImage').addEventListener('click', function() {
  // Obtém o formulário de reserva
  const formularioReserva = document.getElementById('formulario-reserva');
  // Obtém o campo de nome
  const campoNome = document.getElementById('nome');

  // Rolando a página até o formulário
  formularioReserva.scrollIntoView({
    behavior: 'smooth', // rolar de forma suave
    block: 'start' // alinha o topo do formulário com o topo da janela
  });

  // Focando no campo de nome
  campoNome.focus();

  // Exibir a mensagem de redirecionamento
  alert("Reencaminhado para o formulário de reservas. Preencha os dados para continuar.");
});
