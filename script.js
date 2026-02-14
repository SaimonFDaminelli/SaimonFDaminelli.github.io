document.addEventListener('DOMContentLoaded', () => {
    // Revelação Suave das Seções
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Feedback simples no console
    console.log("Portfólio Saimon Daminelli v2.0 - Ativo");
});