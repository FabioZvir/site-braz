const mouse = document.querySelector(".cursor");
const nav = document.querySelector(".header-grid")
const navbar = document.querySelector(".content-header");
const mainCont = document.querySelector(".container")
const navModify = document.querySelector(".header-ul");

// navigator toggle burguer
const footer = document.querySelector(".footer");
const servico = document.querySelector(".container");


const pathModify = document.querySelector(".path-modify");
const overlayModify = document.querySelector(".overlay");
let btn = document.querySelectorAll(".svg-btn");
// let div = document.querySelector(".show-paragrafo");
// let img = document.querySelector(".img_svg");
let navLinks = document.querySelectorAll('.nav-links');

// btn burguer
let burguerNav = document.querySelector('.hamburger');
let activeNav = document.querySelector('.header-nav__active');
let listNav = document.querySelectorAll('.nav-teste__active');

const mouseCursor = mouse.style;


var LastScrollTop = 0;

  window.addEventListener("scroll", () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > LastScrollTop && scrollTop < 4300) {
      nav.classList.add("nav-hide")
      mainCont.classList.remove("pointer")
    } else {
      nav.classList.remove("nav-hide")
      mainCont.classList.add("pointer")
    }
    LastScrollTop = scrollTop;
  });
  

burguerNav.addEventListener('click', () => {
  if (activeNav.style.opacity === '0') {
    activeNav.style.opacity = '1'
    activeNav.style.display = 'block'
    burguerNav.classList.add("activeBtn")
  }
  else {
    activeNav.style.opacity = '0'
    activeNav.style.display = 'none'
    burguerNav.classList.remove("activeBtn")

  }
})


btn.forEach(showBtn => {
  showBtn.addEventListener("click", () =>{
    const div = showBtn.nextElementSibling
    const img = showBtn.parentElement
    if (div.style.opacity === "1") {
      div.style.opacity = '0'
      img.classList.remove("style_svg");
      showBtn.classList.add('svg-servico');
      div.classList.remove("hide")
    } else {
      div.style.opacity = '1'
      showBtn.classList.add('svg-down');
      div.classList.add("hide")
      img.classList.add("style_svg");
      showBtn.classList.remove('svg-servico'); 
    }
  });
});

listNav.forEach(list => {
  list.addEventListener("click", () => {
    if (activeNav.style.opacity === '0') {
      activeNav.style.opacity = '1'
      activeNav.style.display = 'block'
      burguerNav.classList.add("activeBtn") 
    }
    else {
      activeNav.style.opacity = '0'
      activeNav.style.display = 'none'
      burguerNav.classList.remove("activeBtn")
    }
  })
})

// MOUSE
document.addEventListener('mousemove', e => {
  window.requestAnimationFrame(() => {
    mouseCursor.top = `${ e.clientY - mouse.offsetHeight/2 }px`;
    mouseCursor.left = `${ e.clientX - mouse.offsetWidth/2 }px`;
  });
});

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
  mouse.classList.remove("link-grow");
  link.classList.remove("hovered-link");
});
  link.addEventListener("mouseover", () => {
  mouse.classList.add("link-grow");
  link.classList.add("hovered-link");
  });
});
