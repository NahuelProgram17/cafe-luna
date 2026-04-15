// ===========================
// Menú hamburguesa (mobile)
// ===========================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Cerrar menú al hacer click en un link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// ===========================
// Formulario de contacto
// ===========================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = "¡Mensaje enviado!";
    btn.style.background = "#4a7c4e";
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = "Enviar mensaje";
        btn.style.background = "";
        btn.disabled = false;
        contactForm.reset();
    }, 3000);
});

// ===========================
// Animación al hacer scroll
// ===========================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.1 },
);

document
    .querySelectorAll(".menu-card, .stat-item, .contact-item")
    .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
    });
