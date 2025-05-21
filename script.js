// Smooth scrolling for navigation links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Add active class to navbar items on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('#navbar ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation for elements
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.experience-item, .project-item, .hackathon-item, .activity-role');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

// Set up animation on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.experience-item, .project-item, .hackathon-item, .activity-role').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

window.addEventListener('scroll', animateOnScroll);

// Style for visible elements
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .experience-item.visible, .project-item.visible, .hackathon-item.visible, .activity-role.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);
