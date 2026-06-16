// menu hamburger
function initNavigation() {
    const hamburgerBtn = document.querySelector('#hamburgerBtn');
    const mainNav = document.querySelector('#mainNav');
    
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// dados em arrays e objectos
const trailsData = [
    {
        id: 1,
        name: "Rim Trail",
        difficulty: "easy",
        distance: "13 miles",
        description: "Easy trail with great views..."
    },
    {
        id: 2,
        name: "Bright Angel Trail",
        difficulty: "moderate",
        distance: "12 miles",
        description: "Most popular trail with water..."
    }
    // ...mais trilhas
];

const viewpointsData = [
    // ...objetos com dados dos viewpoints
];

const seasonData = {
    spring: { temp: "50-80°F", description: "..." },
    summer: { temp: "70-100°F", description: "..." },
    fall: { temp: "40-75°F", description: "..." },
    winter: { temp: "20-50°F", description: "..." }
};

//trilhas
function renderTrails(filter = 'all') {
    const trailsList = document.querySelector('#trailsList');
    
    // Array method: filter
    const filtered = filter === 'all' 
        ? trailsData 
        : trailsData.filter(trail => trail.difficulty === filter);
    
    // Array method: map + join
    const html = filtered.map(trail => {
        // TEMPLATE LITERALS OBRIGATÓRIOS - não use + para concatenar
        return `
            <article class="trail-card">
                <h3>${trail.name}</h3>
                <p>${trail.description}</p>
                <span class="difficulty-${trail.difficulty}">${trail.difficulty}</span>
            </article>
        `;
    }).join('');
    
    trailsList.innerHTML = html;  // DOM interaction
}

// filtros de trilhas
function initTrailFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active de todos
            buttons.forEach(btn => btn.classList.remove('active'));
            // Adiciona active no clicado
            button.classList.add('active');
            
            const filter = button.dataset.filter;  // "all", "easy", "moderate", "hard"
            
            // CONDICIONAL
            if (filter === 'all') {
                renderTrails('all');
            } else if (['easy', 'moderate', 'hard'].includes(filter)) {
                renderTrails(filter);
            }
            
            // Salva preferência no localStorage
            localStorage.setItem('trailFilter', filter);
        });
    });
}

// season switcher
function initSeasonSwitcher() {
    const buttons = document.querySelectorAll('.season-btn');
    const content = document.querySelector('#seasonContent');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const season = button.dataset.season;  // "spring", "summer", etc.
            
            // CONDICIONAL - verifica se existe dados para esta estação
            if (seasonData[season]) {
                const data = seasonData[season];
                
                // TEMPLATE LITERAL
                content.innerHTML = `
                    <p><strong>${season}:</strong> ${data.description}</p>
                    <p>Temperature: ${data.temp}</p>
                `;
                
                // localStorage
                localStorage.setItem('selectedSeason', season);
            }
        });
    });
}

// formulario
function initTripPlanner() {
    const form = document.querySelector('#tripPlannerForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Evita recarregar a página
        
        // Pega valores do formulário
        const name = document.querySelector('#visitorName').value;
        const date = document.querySelector('#visitDate').value;
        const experience = document.querySelector('#experienceLevel').value;
        
        // CONDICIONAL - validação
        if (!name || !date || !experience) {
            alert('Please fill all required fields');
            return;
        }
        
        // Cria objeto com dados
        const tripData = {
            name: name,
            date: date,
            experience: experience,
            submittedAt: new Date().toISOString()
        };
        
        // Salva no localStorage
        let savedTrips = JSON.parse(localStorage.getItem('savedTrips')) || [];
        savedTrips.push(tripData);
        localStorage.setItem('savedTrips', JSON.stringify(savedTrips));
        
        // Mostra recomendações (outra função)
        showRecommendations(tripData);
    });
}

// mostrar recomendacoes
function showRecommendations(data) {
    const container = document.querySelector('#recommendationsContent');
    
    let recommendedTrails = [];
    
    // CONDICIONAL baseado na experiência
    if (data.experience === 'beginner') {
        recommendedTrails = trailsData.filter(t => t.difficulty === 'easy');
    } else if (data.experience === 'intermediate') {
        recommendedTrails = trailsData.filter(t => t.difficulty === 'easy' || t.difficulty === 'moderate');
    } else {
        recommendedTrails = trailsData.filter(t => t.difficulty === 'hard');
    }
    
    // TEMPLATE LITERAL para criar HTML
    const html = `
        <h3>Welcome, ${data.name}!</h3>
        <p>Based on your ${data.experience} experience, we recommend:</p>
        <ul>
            ${recommendedTrails.map(t => `<li>${t.name} - ${t.distance}</li>`).join('')}
        </ul>
    `;
    
    container.innerHTML = html;
}


// inicializar tudo quando a pagina carrega
function initApp() {
    initNavigation();
    initSeasonSwitcher();
    initTrailFilters();
    initTripPlanner();
    renderTrails();
    
    // Restaura preferências salvas
    const savedFilter = localStorage.getItem('trailFilter');
    if (savedFilter) {
        document.querySelector(`[data-filter="${savedFilter}"]`)?.click();
    }
}

// Inicia quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);