// Flashlight Effect
const hero = document.querySelector('#hero');
const heroReveal = document.getElementById('heroReveal');
const spotlight = document.getElementById('spotlight');

if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update reveal circle with smooth following and fade edges
        const radius = 150; // Tamaño de la linterna
        
        // Update mask position for smooth gradient edges
        heroReveal.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 50%, transparent 100%)`;
        heroReveal.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, black 50%, transparent 100%)`;
        
        // Also update clip-path for browsers that don't support mask well
        heroReveal.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        heroReveal.style.clipPath = 'circle(0px at 50% 50%)';
        heroReveal.style.webkitMaskImage = 'radial-gradient(circle 0px at 50% 50%, black 50%, transparent 100%)';
        heroReveal.style.maskImage = 'radial-gradient(circle 0px at 50% 50%, black 50%, transparent 100%)';
    });
}

// Tab Navigation System
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Scroll to top when changing sections
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === sectionId) {
            link.classList.add('active');
        }
    });
}

// Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        showSection(targetId);
    });
});

// Button Interaction - Go to Services
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        showSection('#servicios');
    });
}

// Initialize - Show hero section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('#hero');
});
