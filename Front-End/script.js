// Modal functionality
const modal = document.getElementById('registrationModal');
const closeBtn = document.getElementsByClassName('close')[0];
const form = document.getElementById('registrationForm');

// Mouse movement for hero content glow effect
document.addEventListener('mousemove', (e) => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const rect = heroContent.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        heroContent.style.setProperty('--mouse-x', `${x}%`);
        heroContent.style.setProperty('--mouse-y', `${y}%`);
    }
});

// Particle effect
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    document.querySelector('.hero').appendChild(particles);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 3 + 2}s infinite`;
        particle.style.opacity = Math.random() * 0.5;
        particles.appendChild(particle);
    }
}

// Initialize particles
createParticles();

function openRegistration() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering! We will contact you soon.');
    modal.style.display = "none";
    form.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});