// === Subpáginas internas ===
function openSubpage(type) {
  const subpage = document.getElementById("subpage");
  const content = document.getElementById("subpage-content");
  subpage.classList.remove("hidden");

  let html = "";

  if (type === "cursos") {
    html = `
      <h3><i class="fas fa-play-circle"></i> Cursos</h3>
      <ul>
        <li><a href="https://www.cursoemvideo.com" target="_blank">Curso em Vídeo</a></li>
        <li><a href="https://www.coursera.org" target="_blank">Coursera</a></li>
        <li><a href="https://app.becas-santander.com/pt-BR" target="_blank">Santander Bolsas</a></li>
      </ul>`;
  } else if (type === "artigos") {
    html = `
      <h3><i class="fas fa-book"></i> Artigos e Arquivos</h3>
      <ul>
        <li><a href="https://dialnet.unirioja.es/servlet/articulo?codigo=6170859" target="_blank">A utilização das tecnologias digitais na educação</a></li>
        <li><a href="https://publicacoes.unicid.edu.br/ambienteeducacao/article/view/1349" target="_blank">Ambiente Educação – Tecnologias e Práticas Educacionais</a></li>
        <li><a href="http://educa.fcc.org.br/scielo.php?pid=S1982-03052018000200299&script=sci_arttext" target="_blank">Educação e Tecnologia no contexto escolar</a></li>
        <li><a href="https://revistas.usp.br/rmrp/article/view/169288" target="_blank">Reflexões sobre o uso de tecnologias digitais no ensino</a></li>
      </ul>`;
  } else if (type === "ferramentas") {
    html = `
      <h3><i class="fas fa-tools"></i> Ferramentas de Estudo</h3>
      <ul>
        <li><a href="https://www.chatpdf.com" target="_blank">ChatPDF</a></li>
        <li><a href="https://chat.openai.com" target="_blank">ChatGPT</a></li>
        <li><a href="https://www.canva.com" target="_blank">Canva</a></li>
      </ul>`;
  }

  content.innerHTML = html;
  window.scrollTo({ top: subpage.offsetTop - 80, behavior: "smooth" });
}

function closeSubpage() {
  document.getElementById("subpage").classList.add("hidden");
}

// === Efeito de Fade e Slide nas seções ===
const faders = document.querySelectorAll(".fade-in, .slide-up");

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => appearOnScroll.observe(el));
