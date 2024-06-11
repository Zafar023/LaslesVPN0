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


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.remove()
}, 2000);

function redirectToSubscribePage() {
  window.location.href = "subscribe.html";
}

