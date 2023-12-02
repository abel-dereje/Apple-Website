var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
  });


var menu = document.querySelector(".ri-menu-3-line");
var clo = document.querySelector(".ri-close-fill");
var nav = document.querySelector(".respo-nav");

menu.addEventListener("click",function(){
      nav.style.top = "0%";
})

clo.addEventListener("click",function(){
  nav.style.top = "-120%";
})

var store = document.querySelector("#store");
var mac = document.querySelector("#mac");
var iPad = document.querySelector("#iPad");
var iPhone = document.querySelector("#iPhone");
var watch = document.querySelector("#watch");
var airPods = document.querySelector("#airPods");
var Tv = document.querySelector("#Tv");
var Entertainment = document.querySelector("#Entertainment");
var Accessories = document.querySelector("#Accessories");
var Support = document.querySelector("#Support");


var subMenu = document.querySelector(".submenu");

store.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

store.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

mac.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

mac.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

iPad.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

iPad.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

iPhone.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

iPhone.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

watch.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

watch.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

airPods.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

airPods.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

Tv.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

Tv.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

Entertainment.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

Entertainment.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

Accessories.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

Accessories.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})

Support.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

Support.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})