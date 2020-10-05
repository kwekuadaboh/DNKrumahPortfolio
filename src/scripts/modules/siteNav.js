// wave animation on btns click
const navHighlight = document.querySelector("#main-nav--highlight");
navHighlight.addEventListener("click", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripples = document.createElement("span");
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 1000);
});

let mainNavList = document.querySelector(".main-nav__list");

mainNavList.addEventListener("click", function (e) {
  if ((e.target.tagName = "A")) {
    let clicked = e.target;
    let current = document.getElementsByClassName(".active");
    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    clicked.classList.add("active");

    console.log(e.target);
  }
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".main-nav__link");

for (let i = 0; i < menuItem.length; i++) {
  if (menuItem[i].href == currentLocation) {
    menuItem[i].classList.add("active");
    console.log("menuHrefURL", menuItem[i].URL);
  }
}
