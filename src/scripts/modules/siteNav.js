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

//sticky navigation on scroll

// window.addEventListener("scroll", () => {
//   const header = document.querySelector("#header");

//   header.classList.toggle("sticky", window.scrollY > 0);
// });
