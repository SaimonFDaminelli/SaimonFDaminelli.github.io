document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Abre e fecha o menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Troca o ícone de bars para X
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x');
    });

    // Fecha o menu ao clicar em um link (importante para mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});