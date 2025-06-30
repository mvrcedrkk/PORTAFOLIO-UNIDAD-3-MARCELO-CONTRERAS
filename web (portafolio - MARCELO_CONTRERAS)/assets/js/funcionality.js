document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".repo-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.borderColor = "#f28787";
    });

    card.addEventListener("mouseleave", () => {
      card.style.borderColor = "#2f2f2f";
    });
  });
});

// Modo Oscuro
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("modo-btn");
  const isDark = localStorage.getItem("modo") === "dark";

  if (isDark) document.body.classList.add("dark-mode");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const modo = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("modo", modo);
  });
});

// sumari oculto 
document.addEventListener("DOMContentLoaded", () => {
  const details = document.querySelectorAll(".habilidades details");

  details.forEach((target) => {
    target.addEventListener("toggle", () => {
      if (target.open) {
        details.forEach((other) => {
          if (other !== target) other.removeAttribute("open");
        });
      }
    });
  });
});

// Función para mostrar la sección seleccionada y ocultar las demás
  function showSection(sectionId) {
    // Ocultar todas las secciones principales
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }

  // Mostrar la primera sección por defecto al cargar
  document.addEventListener('DOMContentLoaded', function() {
    showSection('Programación-Web');
  });
