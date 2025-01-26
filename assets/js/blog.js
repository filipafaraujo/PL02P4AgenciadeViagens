document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const postId = this.getAttribute('data-post');
        alert(`Abrindo mais informações para o post ${postId}!`);
    });
});

document.getElementById('featured-read-more').addEventListener('click', function() {
    alert('Explorando o post destacado!');
});