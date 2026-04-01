// 1. SELECTORS
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay'); // Matches your responsive.css
const navbar = document.querySelector(".navbar");

// 2. STICKY NAVBAR
window.addEventListener("scroll", function() {
    if (navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 50);
    }
});

// 3. MOBILE MENU TOGGLE (Fixed Duplicate Logic)
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Also toggle overlay if it exists in your HTML
        if (navOverlay) {
            navOverlay.classList.toggle('active');
        }
    });
}

// 4. CLOSE MENU ON LINK CLICK
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        if (navOverlay) navOverlay.classList.remove('active');
    });
});

// 5. FAQ ACCORDION
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// 6. INTERSECTION OBSERVER (For Animations)
const cards = document.querySelectorAll('.featured-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});