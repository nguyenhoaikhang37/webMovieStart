const bar = document.querySelector(".header-menu .head-icon");
const bar_scroll = document.querySelector(".header__menu-scroll .head-icon");
const menu = document.querySelector(".head-nav");
const menu_scroll = document.querySelector(".header__menu-scroll .head-nav");
const menu_scroll1 = document.querySelector(".header__menu-scroll");
/*Tab*/
const about = document.querySelector("#schedule .container");
const btns = document.querySelectorAll(".schedule__day .day .day__item");
const articles = document.querySelectorAll(".content-content");

bar.addEventListener("click", function () {
  menu.classList.toggle("active");
});
bar_scroll.addEventListener("click", function () {
  menu_scroll.classList.toggle("active2");
});
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    menu_scroll1.classList.add("show-scroll");
  } else {
    menu_scroll1.classList.remove("show-scroll");
  }
});

/* Tab */
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active-show");
    });
    const element = document.getElementById(id);
    element.classList.add("active-show");
  }
});

$(document).ready(function () {
  const arr__slick = document.querySelectorAll(
    ".comingsoon__boxx .slick-slide"
  );
  arr__slick.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log(item.getAttribute("data-slick-index"));

      /*Reset row opacity: 0; height: 0 */
      document.querySelector(".slide-0").style.opacity = "0";
      document.querySelector(".slide-0").style.height = "0";

      document.querySelector(".slide-1").style.opacity = "0";
      document.querySelector(".slide-1").style.height = "0";

      document.querySelector(".slide-2").style.opacity = "0";
      document.querySelector(".slide-2").style.height = "0";

      if (item.getAttribute("data-slick-index") == "0") {
        document.querySelector(".slide-0").style.opacity = 1;
        document.querySelector(".slide-0").style.height = "auto";
      } else if (item.getAttribute("data-slick-index") == "1") {
        document.querySelector(".slide-1").style.opacity = 1;
        document.querySelector(".slide-1").style.height = "auto";
      } else {
        document.querySelector(".slide-2").style.opacity = 1;
        document.querySelector(".slide-2").style.height = "auto";
      }
    });
  });
});
