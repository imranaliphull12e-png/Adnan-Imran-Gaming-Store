document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       NAVIGATION SYSTEM
       ========================= */

    const navLinks = document.querySelectorAll(".main-nav a");

    const homeSection = document.querySelector("#HOME");
    const aboutSection = document.querySelector("#ABOUT");
    const serviceSection = document.querySelector("#SERVICE");
    const contactSection = document.querySelector("#CONTACT");

    const sections = [
        homeSection,
        aboutSection,
        serviceSection,
        contactSection
    ];

    // شروع میں تمام sections hide
    sections.forEach(function (section) {
        if (section) {
            section.style.display = "none";
        }
    });


    // Navigation buttons
    navLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = this.getAttribute("href");

            // پہلے تمام sections hide
            sections.forEach(function (section) {
                if (section) {
                    section.style.display = "none";
                }
            });

            // صرف منتخب section show
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

            // واپس Hero کے اوپر جائیں
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       FLOATING WHATSAPP BUTTON
       ========================= */

    const whatsappButton = document.querySelector(".floating-buttons");

    if (whatsappButton) {

        const whatsappLink = whatsappButton.querySelector("a");

        if (whatsappLink) {

            whatsappButton.addEventListener("click", function (e) {

                if (!whatsappButton.classList.contains("open")) {

                    e.preventDefault();

                    whatsappButton.classList.add("open");

                } else {

                    window.location.href = whatsappLink.href;

                }

            });

        }

    }

});