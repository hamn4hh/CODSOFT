window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  
  document.querySelectorAll(".content-box").forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (boxTop < winHeight - 100) {
      box.classList.add("visible");
    }
  });
});
