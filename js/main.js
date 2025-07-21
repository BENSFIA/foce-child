// Explication du code:
// sections.forEach((section, index) => { ... });

// Cette ligne parcourt une collection d'éléments HTML stockée dans une variable nommée sections. En général, on obtient cette collection avec une commande comme const sections = document.querySelectorAll('.section');.
// Pour chaque élément section trouvé, le code à l'intérieur de la fonction est exécuté. L'index (la position de l'élément dans la liste, commençant à 0) est également récupéré.
// const directionClass = directions[index % directions.length];

// Cette ligne sélectionne un nom de classe CSS depuis un tableau (array) appelé directions.
// Le tableau directions contiendrait probablement différents noms de classes d'animation, par exemple : ['animation-gauche', 'animation-droite', 'fondu'].
// L'opérateur modulo (%) est utilisé pour parcourir le tableau directions en boucle. Il garantit que si vous avez plus de sections que de directions d'animation, les directions seront réutilisées dans l'ordre.
// setTimeout(() => { section.classList.add(directionClass); }, index * 400);

// setTimeout est au cœur de l'effet de décalage. C'est une fonction JavaScript qui exécute un morceau de code après un délai spécifié en millisecondes.
// Le code à exécuter est section.classList.add(directionClass);. Il ajoute la classe CSS choisie (par exemple, 'animation-gauche') à l'élément section en cours.
// Le délai est calculé par index * 400. Cela signifie que :
// Le premier élément (index 0) aura un délai de 0 * 400 = 0ms (il s'anime immédiatement).
// Le deuxième élément (index 1) aura un délai de 1 * 400 = 400ms.
// Le troisième élément (index 2) aura un délai de 2 * 400 = 800ms.
// Et ainsi de suite.
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const directions = [
    "fade-in-left",
    "fade-in-right",
    "fade-in-up",
    "fade-in-down",
  ];

  sections.forEach((section, index) => {
    const directionClass = directions[index % directions.length];
    setTimeout(() => {
      section.classList.add(directionClass);
    }, index * 400);
  });
});

// 3. Créer la vidéo
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const video = document.createElement("video");
  const source = document.createElement("source");
  video.classList.add("background-video");

  banner.classList.add("video");

  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true; // Important pour l'autoplay sur mobile

  source.src = "wp-content/themes/foce-child/assets/videos/header.mp4";
  source.type = "video/mp4";
  video.appendChild(source);
  banner.appendChild(video);
});
window.addEventListener("scroll", function () {
  const titre = document.querySelector(".banner img");

  // Vitesse de la parallaxe (une valeur entre 0 et 1).
  // Plus elle est proche de 1, moins l'effet est prononcé.
  // Plus elle est proche de 0, plus le titre montera vite.
  const speed = 0.5;

  // On applique une transformation verticale basée sur la position de défilement
  let scrollPosition = window.pageYOffset;
  titre.style.transform = `translateY(${scrollPosition * speed}px)`;
});

// mouvement des nuages
document.addEventListener("DOMContentLoaded", () => {
  const cloudsSection = document.querySelector(".clouds");
  const bigCloud = document.querySelector(".big-cloud");
  const littleCloud = document.querySelector(".little-cloud");

  // Sécurité si les éléments n'existent pas
  if (!cloudsSection || !bigCloud || !littleCloud) {
    console.warn("Un ou plusieurs éléments de nuage sont manquants.");
    return;
  }

  // Définissez la distance que chaque nuage parcourra (en pixels)
  // Des valeurs différentes créent l'effet de parallaxe.
  const bigCloudTravel = -300;
  const littleCloudTravel = -300;

  const handleParallaxScroll = () => {
    // Récupère la position de la section .clouds par rapport à la fenêtre
    const rect = cloudsSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calcule la progression du scroll (de 0 à 1) au sein de la section
    const scrollProgress =
      (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clampedProgress = Math.max(0, Math.min(10, scrollProgress));

    // Calcule la nouvelle position pour chaque nuage
    const bigCloudPosition = clampedProgress * bigCloudTravel;
    const littleCloudPosition = clampedProgress * littleCloudTravel;

    // Applique les transformations via requestAnimationFrame pour une animation fluide
    window.requestAnimationFrame(() => {
      bigCloud.style.transform = `translateX(${bigCloudPosition}px)`;
      littleCloud.style.transform = `translateX(${littleCloudPosition}px)`;
    });
  };

  // Écoute chaque événement de scroll sur la page
  window.addEventListener("scroll", handleParallaxScroll);
});
// Menu burger
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const menuModal = document.getElementById("menu-overlay");
  const menuLinks = document.querySelectorAll(".menu-content a");

  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    menuModal.classList.toggle("show"); // Bascule la classe pour afficher/masquer la modale
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      menuModal.classList.remove("show");
    });
  });
});
