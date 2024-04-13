var slide_combos = new Swiper('.slide-combos', {
  slidesPerView: 3,
  spaceBetween: 32,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  speed: 800,
  pagination: {
    el: '.s-combos .ctrl .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.s-combos .area-slide .btn.next',
    prevEl: '.s-combos .area-slide .btn.prev'
  }
})