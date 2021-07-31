const toogleBTN = document.querySelector('.navbar_toogleBTN');
const menu = document.querySelector('.navbar_menu');


toogleBTN.addEventListener('click', ()=>{
  menu.classList.toggle('active');
});

