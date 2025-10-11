/* ================================
   MENTead - Script principal
   ================================ */

/* === Subpáginas dinâmicas (Mentorie-se) === */
function openSubpage(type) {
  const subpage = document.getElementById("subpage");
  const content = document.getElementById("subpage-content");
  subpage.classList.remove("hidden");

  let html = "";

  if (type === "cursos") {
    html = `
      <h3><i class="fas fa-play-circle"></i> Cursos</h3>
      <ul>
        <li><i class="fas fa-video"></i> <a href="https://www.cursoemvideo.com" target="_blank">Curso em Vídeo</a></li>
        <li><i class="fas fa-laptop-code"></i> <a href="https://www.coursera.org" target="_blank">Coursera</a></li>
        <li><i class="fas fa-graduation-cap"></i> <a href="https://app.becas-santander.com/pt-BR" target="_blank">Santander Bolsas</a></li>
      </ul>`;
  } else if (type === "artigos") {
    html = `
      <h3><i class="fas fa-file-pdf"></i> Artigos e Arquivos</h3>
      <ul>
        <li><i class="fas fa-book-open"></i> <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=6170859" target="_blank">A utilização das tecnologias digitais na educação</a></li>
        <li><i class="fas fa-newspaper"></i> <a href="https://publicacoes.unicid.edu.br/ambienteeducacao/article/view/1349" target="_blank">Ambiente Educação – Tecnologias e Práticas Educacionais</a></li>
        <li><i class="fas fa-scroll"></i> <a href="http://educa.fcc.org.br/scielo.php?pid=S1982-03052018000200299&script=sci_arttext" target="_blank">Educação e Tecnologia no contexto escolar</a></li>
        <li><i class="fas fa-lightbulb"></i> <a href="https://revistas.usp.br/rmrp/article/view/169288" target="_blank">Reflexões sobre o uso de tecnologias digitais no ensino</a></li>
      </ul>`;
  } else if (type === "ferramentas") {
    html = `
      <h3><i class="fas fa-tools"></i> Ferramentas de Estudo</h3>
      <ul>
        <li><i class="fas fa-robot"></i> <a href="https://www.chatpdf.com" target="_blank">ChatPDF</a></li>
        <li><i class="fas fa-comments"></i> <a href="https://chat.openai.com" target="_blank">ChatGPT</a></li>
        <li><i class="fas fa-paint-brush"></i> <a href="https://www.canva.com" target="_blank">Canva</a></li>
      </ul>`;
  }

  content.innerHTML = html;
  window.scrollTo({ top: subpage.offsetTop - 100, behavior: "smooth" });
}

function closeSubpage() {
  document.getElementById("subpage").classList.add("hidden");
}

/* === Fade-in Animation === */
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

/* === Botão Voltar ao Topo === */
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "⬆️";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

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

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
