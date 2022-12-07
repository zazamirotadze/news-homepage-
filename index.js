

let menuOverlay = document.getElementsByClassName("nav__menu-overlay")[0]





function myFunction() {
    if (menuOverlay.style.display !== "none") {
        menuOverlay.style.display = "none";
      } else {
        menuOverlay.style.display = "block";
      }
  }