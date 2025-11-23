// Home page slideshow
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slides.length > 0) {
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", showSlides);

// Contact form validation
function validateForm() {
    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();

    if (!name || !email || !message) {
        alert("All fields must be filled out.");
        return false;
    }

    alert("Message sent successfully!");
    return false; // prevent actual submission
}
