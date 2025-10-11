/* ================================
   MENTead - Script principal
   ================================ */

/* === 1️⃣ Expansão das listas (Mentorie-se) === */
function toggleList(id) {
  const list = document.getElementById(id);
  list.classList.toggle("show");
}

/* === 2️⃣ Animação de entrada (Fade-in ao rolar) === */
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* === 3️⃣ Botão Voltar ao Topo === */
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "⬆️";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

// Estilo do botão criado dinamicamente
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "25px";
backToTopBtn.style.right = "25px";
backToTopBtn.style.background = "#0047AB";
backToTopBtn.style.color = "white";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.width = "45px";
backToTopBtn.style.height = "45px";
backToTopBtn.style.fontSize = "20px";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.boxShadow = "0 3px 8px rgba(0,0,0,0.3)";
backToTopBtn.style.transition = "all 0.3s ease";

// Mostrar botão quando rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Ação de rolagem suave até o topo
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
