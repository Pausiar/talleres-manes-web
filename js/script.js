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
    
    // Hide loading screen after page loads
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 2000); // Mínimo 2 segundos para que se vea la animación
});

// Hide loading screen when everything is fully loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1500);
});

// Logo 3D Tilt Effect
const logoContainer = document.querySelector('.logo-container');
if (logoContainer) {
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let rafId = null;

    const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
    
    const setVarsFromXY = (x, y) => {
        const width = logoContainer.clientWidth || 1;
        const height = logoContainer.clientHeight || 1;

        const percentX = clamp((100 / width) * x);
        const percentY = clamp((100 / height) * y);

        const centerX = percentX - 50;
        const centerY = percentY - 50;

        logoContainer.style.setProperty('--pointer-x', `${percentX}%`);
        logoContainer.style.setProperty('--pointer-y', `${percentY}%`);
        logoContainer.style.setProperty('--rotate-x', `${-(centerX / 3)}deg`);
        logoContainer.style.setProperty('--rotate-y', `${(centerY / 3)}deg`);
    };

    const animate = () => {
        const k = 0.14;
        currentX += (targetX - currentX) * k;
        currentY += (targetY - currentY) * k;

        setVarsFromXY(currentX, currentY);

        const stillMoving = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
        
        if (stillMoving || logoContainer.matches(':hover')) {
            rafId = requestAnimationFrame(animate);
        } else {
            rafId = null;
        }
    };

    const startAnimation = () => {
        if (!rafId) {
            rafId = requestAnimationFrame(animate);
        }
    };

    logoContainer.addEventListener('mouseenter', (e) => {
        logoContainer.classList.add('tilt-active');
        const rect = logoContainer.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        startAnimation();
    });

    logoContainer.addEventListener('mousemove', (e) => {
        const rect = logoContainer.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        startAnimation();
    });

    logoContainer.addEventListener('mouseleave', () => {
        targetX = logoContainer.clientWidth / 2;
        targetY = logoContainer.clientHeight / 2;
        startAnimation();
        
        setTimeout(() => {
            logoContainer.classList.remove('tilt-active');
        }, 200);
    });

    // Initialize center position
    currentX = logoContainer.clientWidth / 2;
    currentY = logoContainer.clientHeight / 2;
    targetX = currentX;
    targetY = currentY;
    setVarsFromXY(currentX, currentY);
}
