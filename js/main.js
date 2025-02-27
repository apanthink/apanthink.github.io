// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        if (link.hash) {
            link.addEventListener('click', function(e) {
                if (link.hash !== '') {
                    e.preventDefault();
                    
                    const targetId = link.hash;
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Update URL hash
                        history.pushState(null, null, targetId);
                    }
                }
            });
        }
    });
    
    // Add active class to navigation links on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Mobile navigation toggle (for future implementation)
    // const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    // const navMenu = document.querySelector('nav ul');
    
    // if (mobileNavToggle) {
    //     mobileNavToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('show');
    //         mobileNavToggle.classList.toggle('active');
    //     });
    // }
    
    // Animation on scroll (simple implementation)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .benefit, .game-mode');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 