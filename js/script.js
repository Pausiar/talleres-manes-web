// Flashlight Effect
const hero = document.getElementById('hero');
const heroReveal = document.getElementById('heroReveal');
const spotlight = document.getElementById('spotlight');

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

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button Interaction
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    // Scroll to services section
    document.querySelector('#servicios').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Parallax Effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBase = document.querySelector('.hero-base');
    if (heroBase) {
        heroBase.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
