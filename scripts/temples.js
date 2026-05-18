// ========== FOOTER DINÂMICO ==========
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// ========== MENU HAMBÚRGUER ==========
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});