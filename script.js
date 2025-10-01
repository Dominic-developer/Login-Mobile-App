"use strict";

// Page slide
const slide = document.getElementById("slider");
    function goToSignUp() {
        slide.style.transform = "translateX(-50%)";
    }

    function goToLogin() {
        slide.style.transform = "translateX(0)";
    }

// Toggle password icon transition
document.querySelectorAll('.toogle-password').forEach((toogle) => {
    toogle.addEventListener('click', () => {
        const input = toogle.prevousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            toogle.textContent = "";
        } else {
            input.type = "password";
            toogle.textContent = "";
        }
    });
}); 