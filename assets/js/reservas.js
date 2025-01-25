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