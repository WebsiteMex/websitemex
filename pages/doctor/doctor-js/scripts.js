        // Menú móvil
        const navToggle = document.querySelector('.nav-toggle');
        const navClose = document.querySelector('.nav-close');
        const nav = document.querySelector('.nav');
        
        navToggle.addEventListener('click', () => {
            nav.classList.add('active');
        });
        
        navClose.addEventListener('click', () => {
            nav.classList.remove('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
        
        // Formulario de contacto
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Su solicitud de cita ha sido enviada. Nos pondremos en contacto con usted en breve para confirmar.');
                contactForm.reset();
            });
        }


        // CAmbiar estilos
    const styleLink = document.getElementById('theme-style');
    const switchBtn = document.getElementById('switch-style');

    let darkMode = false;

    switchBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        styleLink.href = darkMode ? './doctor-styles/alternative-styles.css' : './doctor-styles/styles.css';
        switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
    });