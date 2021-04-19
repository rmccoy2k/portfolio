// const menu = document.querySelector("menu");
// const menuOffsetTop = menuOffsetTop;
// const sections = document.querySelectorAll('sections');
// const menulinks = document.querySelectorAll(".menu-link")

// sections.forEach((section, i) => {
//   if(window.pageYOffset >= section.offsetTop-10) {
//     menulinks.forEach(menulink => {
//       menulink.classList.remove("change")
//     });
//     menulinks[i].classList.add('change')
//   }
// });


window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// Scroll Button
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
