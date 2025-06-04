    const styleLink = document.getElementById('theme-style');
    const switchBtn = document.getElementById('switch-style');

    let darkMode = false;

    switchBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        styleLink.href = darkMode ? './styles/alternative-styles.css' : './styles/styles.css';
        switchBtn.textContent = darkMode ? 'Volver al Estilo Claro' : 'Cambiar Estilo';
    });

//MATRIX
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let columns = canvas.width / 14;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#00ff9c";
ctx.font = "12px monospace"; // Disminuimos el tamaño de la fuente para hacerlo más discreto


    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 14, drops[i] * 14);
        if (drops[i] * 14 > canvas.height || Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
