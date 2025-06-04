        // Toggle del menú móvil
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelectorAll('.nav a');
        
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            
            // Cambiar ícono de hamburguesa a X cuando el menú está abierto
            const icon = navToggle.querySelector('i');
            if (document.body.classList.contains('nav-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Animación suave al hacer clic en enlaces
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        //CAmbiar estilos
            const styleLink = document.getElementById('theme-style');
    const switchBtn = document.getElementById('switch-style');

    let darkMode = false;

    switchBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        styleLink.href = darkMode ? './food-styles/alternative-styles.css' : './food-styles/styles.css';
        switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
    });
