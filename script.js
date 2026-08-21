document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       NAVIGATION SYSTEM
       ========================= */

    const navLinks = document.querySelectorAll(".main-nav a");

    const sections = [
        document.querySelector("#HOME"),
        document.querySelector("#ABOUT"),
        document.querySelector("#SERVICE"),
        document.querySelector("#CONTACT")
    ];

    // شروع میں تمام sections hide
    sections.forEach(function (section) {
        if (section) {
            section.style.display = "none";
        }
    });


    /* =========================
       NAVIGATION BUTTONS
       ========================= */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = this.getAttribute("href");

            // تمام sections hide
            sections.forEach(function (section) {
                if (section) {
                    section.style.display = "none";
                }
            });

            // منتخب section show
            const selectedSection = document.querySelector(target);

            if (selectedSection) {

                selectedSection.style.display = "block";

                selectedSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       BACK TO MENU
       ========================= */

    const backButtons = document.querySelectorAll(
        "#HOME a[href='#'], #ABOUT a[href='#'], #SERVICE a[href='#'], #CONTACT a[href='#']"
    );

    backButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            // تمام sections hide
            sections.forEach(function (section) {
                if (section) {
                    section.style.display = "none";
                }
            });

            // Hero کے اوپر واپس
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });

});