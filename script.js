document.addEventListener('DOMContentLoaded', () => {
    // Efeito de Revelação (Scroll Reveal)
    const observerOptions = { threshold: 0.15 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Partículas leves no background (opcional)
    console.log("Portfólio de Saimon carregado com sucesso.");
});