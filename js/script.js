
const menu = document.querySelector(".nav-menu");

// STICKY NAVBAR

window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

navbar.classList.toggle("sticky", window.scrollY > 50);

});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

if(answer.style.maxHeight){
answer.style.maxHeight = null;
}else{
answer.style.maxHeight = answer.scrollHeight + "px";
}

});

});


const cards = document.querySelectorAll('.featured-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach((card) => {
  observer.observe(card);
});



const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if(menuToggle && navMenu){
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});
