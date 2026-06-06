const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl: "images/yigo.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "images/sao-paulo.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 128325,
    imageUrl: "images/provo.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/rome.jpg"
  }
];





// Seleciona o elemento container do HTML onde os templos vão aparecer
const container = document.querySelector("#temple-container"); 
const galleryTitle = document.querySelector("#temple-gallery");

function displayTemples(filteredTemples) {
  // Limpa o container antes de renderizar (evita duplicar ao filtrar)
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    // Cria o elemento do card (pode ser um <figure> ou <section>)
    let card = document.createElement("section");
    card.classList.add("temple-card");

    // Cria os elementos internos com as informações requeridas
    let name = document.createElement("h3");
    name.textContent = temple.templeName; 

    let location = document.createElement("p");
    location.innerHTML = `<span>Location:</span> ${temple.location}`; 

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`; 

    let area = document.createElement("p");
    area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`; 

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl); 
    img.setAttribute("alt", `${temple.templeName} Temple`); 
    img.setAttribute("loading", "lazy"); // REQUISITO: Native Lazy Loading 
    img.setAttribute("width", "400"); // Bom para performance/Lighthouse
    img.setAttribute("height", "250");

    // Adiciona tudo dentro do card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    // Adiciona o card ao container principal do site
    container.appendChild(card);
  });
}

// Chama a função pela primeira vez para mostrar todos ao carregar a página
displayTemples(temples);


// Seleciona os links de navegação (ajuste os seletores de acordo com o seu HTML)
const navHome = document.querySelector("#nav-home");
const navOld = document.querySelector("#nav-old");
const navNew = document.querySelector("#nav-new");
const navLarge = document.querySelector("#nav-large");
const navSmall = document.querySelector("#nav-small");

// Evento: Home (Todos)
navHome.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples); 
});

// Evento: Old (Antes de 1900)
navOld.addEventListener("click", (e) => {
  e.preventDefault();
  // Extrai o ano da string de dedicação convertendo para número
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900; 
  });
  displayTemples(oldTemples);
});

// Evento: New (Depois de 2000)
navNew.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000; 
  });
  displayTemples(newTemples);
});

// Evento: Large (> 90000)
navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000); 
  displayTemples(largeTemples);
});

// Evento: Small (< 10000)
navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000); 
  displayTemples(smallTemples);
});


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