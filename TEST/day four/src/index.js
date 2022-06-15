function resizing() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 400) {
      document.body.style.backgroundColor = "mediumslateblue";
    } else if (windowWidth < 700) {
      document.body.style.backgroundColor = "pink";
    } else if (windowWidth < 1000) {
      document.body.style.backgroundColor = "seagreen";
    }
  }
  resizing();
  window.addEventListener("resize", resizing);
  