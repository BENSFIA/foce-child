document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    perspective: 0,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 90,
      scale: 0.8,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
});
