const toogleBTN = document.querySelector(".navbar_toogleBTN");
const menu = document.querySelector(".navbar_menu");
const nav = document.querySelector(".navbar");

toogleBTN.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

const mainlogo = document.querySelector(".navbar_logo");
mainlogo.addEventListener("click", () =>
  window.scrollTo({ top: mainlogo.offsetTop, behavior: "smooth" })
);

const profile = document.querySelector(".I_More");
const about = document.querySelector(".n_m_a");
const skill = document.querySelector(".n_m_s");
const project = document.querySelector(".n_m_p");

const c_i = document.querySelector(".INTRO");
const c_a = document.querySelector(".PERSONAL");
const c_s = document.querySelector(".SKILL");
const c_p = document.querySelector(".PROJECT");

profile.addEventListener("click", () =>
  window.scrollTo({ top: c_a.offsetTop - 200, behavior: "smooth" })
);
about.addEventListener("click", () =>
  window.scrollTo({ top: c_a.offsetTop - 200, behavior: "smooth" })
);
skill.addEventListener("click", () =>
  window.scrollTo({ top: c_s.offsetTop, behavior: "smooth" })
);

project.addEventListener("click", () =>
  window.scrollTo({ top: c_p.offsetTop, behavior: "smooth" })
);



function open_chatroom() {
  var windowWidth = $(window).width();
  if (windowWidth < 575) {
    //창 가로 크기가 500 미만일 경우
    profile.addEventListener("click", () =>
      window.scrollTo({ top: c_a.offsetTop, behavior: "smooth" })
    );

    about.addEventListener("click", () =>
      window.scrollTo({ top: c_a.offsetTop, behavior: "smooth" })
    );

    $("#remote").css({ display: "none" });
  } else {
    //창 가로 크기가 500보다 클 경우
  }
}

$(document).ready(function () {
  /*스크롤 내릴때 어바웃 스킬 막대바 애니메이션 */
  $(window).scroll(function () {
    /*오른쪽 메뉴가 어바웃부터 나타남*/

    if ($(this).scrollTop() > 700) {
      $("#remote").css({ display: "block" });
    } else {
      $("#remote").css({ display: "none" });
    }
    open_chatroom();
    /*오른쪽 메뉴 스크롤*/

    if ($(this).scrollTop() > 600) {
      $("#list2").css("background-color", "#e5e5e5");
    } else {
      $("#list2").css("background-color", "transparent");
    }

    if ($(this).scrollTop() > 1000) {
      $("#list2").css("background-color", "transparent");
    }

    if ($(this).scrollTop() > 1200) {
      $("#list3").css("background-color", "#e5e5e5");
    } else {
      $("#list3").css("background-color", "transparent");
    }

    if ($(this).scrollTop() > 2800) {
      $("#list3").css("background-color", "transparent");
    }

    if ($(this).scrollTop() > 2900) {
      $("#list4").css("background-color", "#e5e5e5");
    } else {
      $("#list4").css("background-color", "transparent");
    }

    if ($(this).scrollTop() > 3300) {
      $("#list4").css("background-color", "transparent");
    }
  });
});


//test push