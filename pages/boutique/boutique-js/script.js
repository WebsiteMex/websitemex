        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        //Cambio de estilos
    const styleLink = document.getElementById('theme-style');
    const switchBtn = document.getElementById('switch-style');

    let darkMode = false;

    switchBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        styleLink.href = darkMode ? './boutique-styles/alternative-styles.css' : './boutique-styles/styles.css';
        switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
    });