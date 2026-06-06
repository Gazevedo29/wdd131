// Array contendo a lista oficial dos 9 templos com caminhos de imagem otimizados [cite: 26, 29]
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/1.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/2.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/3.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl: "images/4.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/5.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/6.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "images/7.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 128325,
    imageUrl: "images/8.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/9.jpg"
  }
];

// Seleciona os elementos estruturais do HTML
const container = document.querySelector("#temple-container"); 
const galleryTitle = document.querySelector("#temple-gallery");

// Função principal para renderizar os cartões dos templos de forma dinâmica [cite: 25, 30]
function displayTemples(filteredTemples) {
  // Limpa o container para evitar duplicações ao alternar filtros
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    // Cria o card usando a tag estrutural <figure> [cite: 25]
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    // 1. Título do templo [cite: 31]
    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    // 2. Localização com rótulo em destaque para estilização CSS [cite: 33]
    const location = document.createElement("p");
    location.innerHTML = `<span>Location:</span> ${temple.location}`;

    // 3. Data de Dedicação [cite: 34]
    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

    // 4. Área Total formatada localmente [cite: 36]
    const area = document.createElement("p");
    area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

    // 5. Elemento de Imagem com suporte nativo a Lazy Loading [cite: 37, 38]
    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy"); // Requisito mandatório de performance 
    img.setAttribute("width", "400");    // Previne mudanças de layout estruturais (CLS)
    img.setAttribute("height", "250");

    // Organiza os elementos filhos dentro do cartão na ordem padrão
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    // Renderiza o cartão completo na tela
    container.appendChild(card);
  });
}

// Inicialização: exibe todos os templos assim que a página carrega [cite: 57]
displayTemples(temples);


// Mapeamento dos elementos de navegação
const navHome = document.querySelector("#nav-home");
const navOld = document.querySelector("#nav-old");
const navNew = document.querySelector("#nav-new");
const navLarge = document.querySelector("#nav-large");
const navSmall = document.querySelector("#nav-small");

// Evento de Clique: Home (Mostra todos) [cite: 57]
navHome.addEventListener("click", (e) => {
  e.preventDefault();
  galleryTitle.textContent = "Home Gallery";
  displayTemples(temples); 
});

// Evento de Clique: Old (Construídos antes de 1900) [cite: 50]
navOld.addEventListener("click", (e) => {
  e.preventDefault();
  galleryTitle.textContent = "Old Temples";
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900; 
  });
  displayTemples(oldTemples);
});

// Evento de Clique: New (Construídos após o ano 2000) [cite: 52]
navNew.addEventListener("click", (e) => {
  e.preventDefault();
  galleryTitle.textContent = "New Temples";
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000; 
  });
  displayTemples(newTemples);
});

// Evento de Clique: Large (Área maior que 90.000 sq ft) [cite: 53]
navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  galleryTitle.textContent = "Large Temples";
  const largeTemples = temples.filter(temple => temple.area > 90000); 
  displayTemples(largeTemples);
});

// Evento de Clique: Small (Área menor que 10.000 sq ft) [cite: 56]
navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  galleryTitle.textContent = "Small Temples";
  const smallTemples = temples.filter(temple => temple.area < 10000); 
  displayTemples(smallTemples);
});


// ========== DADOS DO RODAPÉ (FOOTER) ========== 

// Define o ano dinâmico atual para a linha de copyright
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Atualiza o texto informando o momento exato da última modificação do documento
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;


// ========== INTERAÇÃO MENU HAMBÚRGUER ==========

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  // Alterna a classe css 'open' para ocultar/exibir links em dispositivos móveis
  nav.classList.toggle('open');

  // Ajusta o símbolo do botão com base no estado de abertura do menu
  if (nav.classList.contains('open')) {
    menuToggle.textContent = '✕';
  } else {
    menuToggle.textContent = '☰';
  }
});