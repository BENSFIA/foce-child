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
