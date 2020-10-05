const manNavList = document.querySelector(".main-nav__list");

manNavList.addEventListener("click", function (e) {
  if ((e.target.tagName = "A")) {
    // console.log(e.target);
    const clicked = e.target;
    const current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].classList.remove("active");
    }
    clicked.classList.add("active");
  }
});
