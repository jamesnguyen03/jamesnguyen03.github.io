
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
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
        520: {
            slidesPerView: 2
        },      
    },
  });