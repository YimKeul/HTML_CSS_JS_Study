const toogleBTN = document.querySelector('.navbar_toogleBTN');
const menu = document.querySelector('.navbar_menu');
const nav = document.querySelector('.navbar');
const logo = document.querySelector('.navbar_logo i');

toogleBTN.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  nav.classList.toggle('active');
  logo.classList.toggle('active');
});




