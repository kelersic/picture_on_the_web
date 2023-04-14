  // navigation bar scorilling
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("top-nav").classList.remove("hidden");
    } else {
      document.getElementById("top-nav").classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
  }