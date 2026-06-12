// Array de produtos fornecido pelo professor
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Preencher o select de produtos dinamicamente
function populateProducts() {
    const select = document.getElementById('product');

    // Verificar se o select existe
    if (!select) {
        console.error('Elemento select não encontrado!');
        return;
    }

    // Percorrer o array de produtos e criar as options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;        // ID como value
        option.textContent = product.name;  // Nome como texto visível
        select.appendChild(option);
    });

    console.log('Produtos carregados:', products.length);
}

// Mostrar data da última modificação no footer
function showLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
        console.log('Last Modified:', document.lastModified);
    } else {
        console.error('Elemento lastModified não encontrado!');
    }
}

// Executar quando a página carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado! Iniciando...');
    populateProducts();
    showLastModified();
});