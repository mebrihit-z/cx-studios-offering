// Website data - Add your websites here
const websites = [
    {
        title: "Insites",
        description: "My personal portfolio showcasing my work and skills in web development.",
        url: "http://cxstudios-insites.s3-website.us-east-2.amazonaws.com",
        icon: "💡",
        // icon: "💼",
        tags: ["Portfolio", "Personal"]
    },
    {
        title: "Marketplace",
        description: "Supporting your freedom to create with Marketplace",
        url: "http://cx-marketplace.s3-website.us-east-2.amazonaws.com",
        icon: "🛒",
        // icon: "🛍️",
        tags: ["E-Commerce", "React"]
    },
    
];

// Create a card element for each website
function createCard(website) {
    const card = document.createElement('div');
    card.className = 'website-card';
    
    card.innerHTML = `
        <div class="card-icon">${website.icon}</div>
        <h3 class="card-title">${website.title}</h3>
        <p class="card-description">${website.description}</p>
        <div class="card-tags">
            ${website.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${website.url}" class="card-link" target="_blank" rel="noopener noreferrer">
            Visit Website
        </a>
    `;
    
    return card;
}

// Render all websites
function renderWebsites(websitesToRender) {
    const grid = document.getElementById('websitesGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (websitesToRender.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    websitesToRender.forEach(website => {
        grid.appendChild(createCard(website));
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const filteredWebsites = websites.filter(website => {
            return website.title.toLowerCase().includes(searchTerm) ||
                   website.description.toLowerCase().includes(searchTerm) ||
                   website.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });
        
        renderWebsites(filteredWebsites);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderWebsites(websites);
    setupSearch();
});

