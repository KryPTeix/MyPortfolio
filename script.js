// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 245, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Particle system
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight + 10;
    const duration = Math.random() * 4 + 4;
    const delay = Math.random() * 2;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    document.getElementById('particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Project card click effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = 'translateY(-10px)';
        }, 150);
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00ff88 100%)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            e.target.reset();
        }, 2000);
    }, 1500);
});

// Mobile menu toggle (basic implementation)
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const spans = this.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.transform = this.classList.contains('active') 
            ? 'none' 
            : index === 1 ? 'rotate(45deg)' : index === 0 ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(45deg) translate(-5px, -6px)';
    });
    this.classList.toggle('active');
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

setTimeout(() => {
    let i = 0;
    const typeWriter = setInterval(() => {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        if (i > originalText.length) {
            clearInterval(typeWriter);
        }
    }, 100);
}, 200);

// Add glow effect to skills on hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.boxShadow = '0 10px 30px rgba(0, 245, 255, 0.3)';
        skill.style.background = 'rgba(0, 245, 255, 0.05)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.boxShadow = '';
        skill.style.background = 'var(--bg-card)';
    });
});