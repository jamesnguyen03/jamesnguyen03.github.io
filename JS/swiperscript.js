
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop: false,
    loopFillGroupWithBlank: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, 
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2
        },      
    },
  });