document.addEventListener("DOMContentLoaded", function() {
    // Load header and footer
    fetch("header.html")
        .then(res => res.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);
    fetch("footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    // Home page slideshow
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
        slideIndex++;
        if (slides.length > 0) {
            if (slideIndex > slides.length) slideIndex = 1;
            slides[slideIndex-1].style.display = "block";
        }
        setTimeout(showSlides, 3000);
    }
    showSlides();
});

// Contact form validation
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;
    if (!name || !email || !message) {
        alert("All fields must be filled out.");
        return false;
    }
    alert("Message sent successfully!");
    return false; // Prevent actual submission
}
