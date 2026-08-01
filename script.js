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
const sparks = document.querySelector(".sparks");

if (sparks) {

  setInterval(function () {

    const s = document.createElement("span");
    s.className = "spark";

    const angle = Math.random() * 360;
    const distance = 235;

    s.style.left = "50%";
    s.style.top = "50%";
    s.style.transform =
      `rotate(${angle}deg) translate(${distance}px)`;

    sparks.appendChild(s);

    setTimeout(function () {
      s.remove();
    }, 500);

  }, 80);

}