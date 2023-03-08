
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop: true,
    loopFillGroupWithBlank: true,
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
        700: {
            slidesPerView: 2
        },      
    },
  });