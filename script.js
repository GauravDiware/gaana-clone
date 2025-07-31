document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar_menu');

  openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});


const swiper = new Swiper('.slider-wrapper', { 
  loop: true,
  

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
  breakpoints :{
    0:{
      slidesPreView : 1
    },
    620:{
      slidesPreView : 2
    }, 
    1024:{
      slidesPreView : 3
    }
  }
});