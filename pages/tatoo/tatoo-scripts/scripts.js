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

        // Filtros de galería (funcionalidad completa)
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                button.classList.add('active');
                
                // Obtener la categoría a filtrar
                const filter = button.getAttribute('data-filter');
                
                // Filtrar las imágenes
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Generar gotas de tinta
        document.addEventListener('DOMContentLoaded', () => {
            const inkContainer = document.getElementById('inkContainer');
            
            function createInkDrop() {
                // Posición horizontal aleatoria
                const xPos = Math.random() * 95;
                
                // Duración aleatoria
                const duration = (Math.random() * 2 + 3).toFixed(2);
                
                // Crear gota principal
                const drop = document.createElement('div');
                drop.className = 'ink-drop';
                drop.style.left = `${xPos}%`;
                drop.style.animationDuration = `${duration}s`;
                drop.style.setProperty('--drop-color', `hsl(${Math.random() * 20 + 340}, 80%, 60%)`);
                
                // Crear rastro
                const trail = document.createElement('div');
                trail.className = 'ink-trail';
                trail.style.left = `${xPos}%`;
                trail.style.top = '88vh';
                trail.style.animationDuration = `${duration}s`;
                
                // Agregar elementos al contenedor
                inkContainer.appendChild(drop);
                inkContainer.appendChild(trail);
                
                // Eliminar elementos después de la animación
                setTimeout(() => {
                    if (drop.parentNode) drop.parentNode.removeChild(drop);
                    if (trail.parentNode) trail.parentNode.removeChild(trail);
                }, duration * 1000);
            }
            
            // Crear gotas automáticamente cada 1.5 segundos
            setInterval(createInkDrop, 1500);
            
            // Crear algunas gotas iniciales
            for(let i = 0; i < 5; i++) {
                setTimeout(() => createInkDrop(), i * 600);
            }
            
            // Menú móvil
            const navToggle = document.querySelector('.nav-toggle');
            const nav = document.querySelector('.nav');
            
            navToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
            
            // Filtros de galería
            const filterBtns = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remover clase activa de todos los botones
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Agregar clase activa al botón clickeado
                    btn.classList.add('active');
                    
                    const filter = btn.getAttribute('data-filter');
                    
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Smooth scrolling para enlaces internos
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Cerrar menú móvil si está abierto
                        if (nav.classList.contains('active')) {
                            nav.classList.remove('active');
                        }
                    }
                });
            });
        });

// Cambiar estilos
    const styleLink = document.getElementById('theme-style');
    const switchBtn = document.getElementById('switch-style');

    let darkMode = false;

    switchBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        styleLink.href = darkMode ? './tatoo-styles/alternative-styles.css' : './tatoo-styles/styles.css';
        switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
    });