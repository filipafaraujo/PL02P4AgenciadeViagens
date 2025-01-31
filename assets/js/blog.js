// contador de visualizações
document.addEventListener("DOMContentLoaded", function () {
    let contador = localStorage.getItem("contadorVisitas");

    if (contador === null) {
        contador = 0;
    }

    contador++;
    localStorage.setItem("contadorVisitas", contador);

    document.getElementById("contador").textContent = `Visitas: ${contador}`;
});


// mostra a data atual no blog
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".blog-header");
    
    const dateElement = document.createElement("p");
    const today = new Date().toLocaleDateString("pt-PT");
    dateElement.innerText = `📅 Hoje é ${today}`;
    
    header.appendChild(dateElement);
});

// adicionar botão voltar ao topo quando se está no fundo da página
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});