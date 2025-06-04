        document.addEventListener('DOMContentLoaded', function() {
            // Carrusel de fotos
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.carousel-dot');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            let currentSlide = 0;
            let slideInterval;
            
            // Función para mostrar una diapositiva específica
            function showSlide(index) {
                // Ocultar todas las diapositivas
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                
                // Quitar clase active de todos los puntos
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                
                // Mostrar la diapositiva seleccionada
                slides[index].classList.add('active');
                
                // Activar el punto correspondiente
                dots[index].classList.add('active');
                
                // Actualizar índice actual
                currentSlide = index;
            }
            
            // Función para avanzar a la siguiente diapositiva
            function nextSlide() {
                let nextIndex = currentSlide + 1;
                if (nextIndex >= slides.length) {
                    nextIndex = 0;
                }
                showSlide(nextIndex);
            }
            
            // Función para retroceder a la diapositiva anterior
            function prevSlide() {
                let prevIndex = currentSlide - 1;
                if (prevIndex < 0) {
                    prevIndex = slides.length - 1;
                }
                showSlide(prevIndex);
            }
            
            // Event listeners para los botones
            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
            
            // Event listeners para los puntos de navegación
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-index'));
                    showSlide(slideIndex);
                });
            });
            
            // Iniciar el cambio automático de diapositivas
            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
            }
            
            // Pausar el carrusel cuando el mouse está sobre él
            const carousel = document.querySelector('.carousel-container');
            carousel.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            // Reanudar el carrusel cuando el mouse sale
            carousel.addEventListener('mouseleave', startSlideShow);
            
            // Iniciar el carrusel
            startSlideShow();
            
            // Inicializar con la primera diapositiva visible
            showSlide(0);
        });

                //CAmbiar estilos
            const styleLink = document.getElementById('theme-style');
    const switchBtn = document.getElementById('switch-style');

    let darkMode = false;

    switchBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        styleLink.href = darkMode ? './photo-styles/alternative-styles.css' : './photo-styles/styles.css';
        switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
    });