// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.98)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.9)";
        navbar.style.boxShadow = "none";
    }
});


// ================= TYPEWRITER EFFECT =================
const heroTitle = document.querySelector(".hero-title");

const text = "Kompüter Elmləri və Data Analitikası Tələbəsi";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    }
}

heroTitle.textContent = "";
typeWriter();


// ================= SECTION REVEAL ANIMATION =================
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s ease";
    revealObserver.observe(section);
});


// ================= ACTIVE NAV LINK =================
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================= SKILL HOVER GLOW EFFECT =================
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px rgba(56,189,248,0.6)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
    });
});