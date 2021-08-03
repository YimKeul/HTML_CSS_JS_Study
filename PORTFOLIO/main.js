const toogleBTN = document.querySelector('.navbar_toogleBTN');
const menu = document.querySelector('.navbar_menu');
const nav = document.querySelector('.navbar');


toogleBTN.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  nav.classList.toggle('active');
 
});


const mainlogo = document.querySelector(".navbar_logo");
mainlogo.addEventListener("click", () => window.scrollTo({ top: mainlogo.offsetTop, behavior: 'smooth' }));

const profile = document.querySelector(".I_More");
profile.addEventListener("click", () => window.scrollTo({ top: profile.offsetTop+100, behavior: 'smooth' }));





const about = document.querySelector(".n_m_a");
const skill = document.querySelector(".n_m_s");
const project = document.querySelector(".n_m_p");

const c_a = document.querySelector(".PERSONAL");
const c_s = document.querySelector(".SKILL");
const c_p = document.querySelector(".PROJECT");

about.addEventListener("click", () => window.scrollTo({ top: c_a.offsetTop-100, behavior: 'smooth' }));
skill.addEventListener("click", () => window.scrollTo({ top: c_s.offsetTop-100, behavior: 'smooth' }));
project.addEventListener("click", () => window.scrollTo({ top: c_p.offsetTop-100, behavior: 'smooth' }));