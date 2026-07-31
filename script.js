// JavaScript Start

console.log("Hello Imran");

window.addEventListener("load", function () {

  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(function () {
      loader.style.opacity = "0";

      setTimeout(function () {
        loader.style.display = "none";
      }, 500);

    }, 3000);
  }

  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      const text = this.parentElement;

      text.classList.toggle("show-text");

      if (text.classList.contains("show-text")) {
        this.textContent = "Read Less";
      } else {
        this.textContent = "Read More";
      }

    });

  });

});