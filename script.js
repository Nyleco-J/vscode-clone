const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});
// var slider = tns({
//   container: '.slider__wrapper',
//   items: 1,
//   mouseDrag:true,
//   controlsText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
//   responsive:{
//       0:{
//           items: 3,
//       },
//       481:{
//           items: 1,
//       }
//   }
// });