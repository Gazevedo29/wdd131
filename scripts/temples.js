// ========== FOOTER DINÂMICO ==========
// temples.js

// 1. Preencher o ano atual no copyright
document.getElementById('currentyear').textContent = new Date().getFullYear();

// 2. Preencher a data da última modificação
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

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