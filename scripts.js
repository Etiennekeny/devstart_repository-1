// Effet de défilement lent
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Animation au scroll (exemple simple)
window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.transform = translateY(${window.scrollY * 0.3}px);
});

// Animation d’apparition pour les images dans la section À propos
const aboutImages = document.querySelectorAll('.about-gallery img');

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

aboutImages.forEach(img => {
  img.classList.add('hidden');
  appearOnScroll.observe(img);
});

// Apparition des items du menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.classList.add('hidden');
  appearOnScroll.observe(item);
});

// Carousel automatique
let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');
const totalSlides = carouselImages ? carouselImages.children.length : 0;

function showSlide(index) {
  if (carouselImages) {
    carouselImages.style.transform = translateX(-${index * 100}%);
  }
}

if (totalSlides > 0) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 4000); // Change d’image toutes les 4 secondes
}

const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.classList.add('hidden');
  appearOnScroll.observe(member);
});

// Smooth scroll pour les ancres internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Lightbox pour les images du menu
const menuImages = document.querySelectorAll('.menu-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

menuImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Clic en dehors de l’image ferme aussi
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxImg) {
    lightbox.style.display = 'none';
  }
});





// Dark mode toggle
const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Charger préférence
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
}

// Bascule
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});










