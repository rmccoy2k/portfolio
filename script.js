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
    document.querySelector('body').classList.add('display');
  }, 4000);
};

document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

// Scroll Button
document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth';
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'unset';
  }, 1000);
});

// Auto Text
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Welcome! Rico McCoy is a Frontend & Backend Developer.';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
// End of Auto Text

// Check Email
const checkEmail = (input) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(input.value.trim())) {
    success(input);
  } else {
    error(input, 'Email is not valid');
  }
};
// End of Check Email
