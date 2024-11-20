/////////////////////////////////////////
// drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-nav").toggleClass("is-checked");
  jQuery(".header__join-button").toggleClass("is-checked");
});

jQuery('#js-drawer-nav a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-nav").removeClass("is-checked");
  jQuery(".header__join-button").removeClass("is-checked");
});

// /////////////////////////////////
// room-swiper
// /////////////////////////////////

const roomSwiper = new Swiper("#roomSwiper", {
  slidesPerView: 1.28,
  loop: true,
  initialSlide: 1,
  spaceBetween: 24,
  centeredSlides: true,
  speed: 500,
  // autoplay: {
  //   delay: 5000, // スライドが停止するまでの待機時間
  //   disableOnInteraction: false, // ユーザーの操作によって自動再生を停止させない
  // },
  breakpoints: {
    901: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});

// ///////////////////////////////
// use-swiper
// ///////////////////////////////
const useSwiper = new Swiper("#useSwiper", {
  // Optional parameters
  loop: true,
  // slidesPerView: 1,
  breakpoints: {
    901: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable :true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// /////////////////////////////////////////
// voiceSwiper
// /////////////////////////////////////////
const voiceSwiper = new Swiper("#voiceSwiper", {
  // Optional parameters
  loop: true,
  // slidesPerView: 1,
  centeredSlides: true,
  // slidesPerView: 'auto',
  breakpoints: {
    901: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ///////////////////////////////////////
// js-voice-accordion
// ///////////////////////////////////////
jQuery(".js-voice-accordion").on("click", function(e) {
  e.preventDefault();

  $(this)
    .closest(".voice__slide-box")
    .find(".voice__swiper-body-text")
    .slideToggle();
})

// ////////////////////////////////////////
// js-qa-accordion
// ////////////////////////////////////////
jQuery(".js-qa-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
})