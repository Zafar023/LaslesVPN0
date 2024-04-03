const header_burger = document.querySelector(".header_burger");
const header_menu = document.querySelector(".header_menu");

header_burger.addEventListener("click", () => {
  header_menu.classList.toggle("open");
});

//   document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide' );
//     splide.mount();
//   } );

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  breakpoints: {
    800: {
      perPage: 1,
    },
  },
});

splide.mount();
