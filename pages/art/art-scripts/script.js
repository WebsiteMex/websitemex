const styleLink = document.getElementById('theme-style');
const switchBtn = document.getElementById('switch-style');

let darkMode = false;

switchBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    styleLink.href = darkMode ? './art-styles/alternative-styles.css' : './art-styles/styles.css';
    switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
});