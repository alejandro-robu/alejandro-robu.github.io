document.addEventListener('DOMContentLoaded', function () {
    // 1. Inicialización de Splide (Solo si existe en la página)
    const carouselCheck = document.querySelector('#project-carousel');
    if (carouselCheck) {
        var splide = new Splide('#project-carousel', {
            type   : 'loop',
            padding: '5rem',
            gap    : '2rem',
            arrows : true,
            pagination: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            speed: 800,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            breakpoints: {
                768: { padding: '0', gap: '1rem' }
            }
        });
        splide.mount();
    }

    // 2. Lógica de Modo Claro/Oscuro
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);

        if (theme === 'light') {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Leer estado inicial
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});