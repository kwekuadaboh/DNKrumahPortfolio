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

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".main-nav__link");

for (let i = 0; i < menuItem.length; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add("active");
  }
}
