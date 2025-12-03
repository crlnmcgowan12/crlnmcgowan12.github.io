document.addEventListener("DOMContentLoaded", () => {
    // ------------------------------------------------------------
    // 1. Include external HTML files
    // ------------------------------------------------------------
    const includeElements = document.querySelectorAll("[data-include]");
    includeElements.forEach((el) => {
        const file = el.getAttribute("data-include");
        if (file) {
            fetch(file)
                .then((response) => response.text())
                .then((data) => {
                    el.innerHTML = data;
                })
                .catch((err) => console.error("Include error:", err));
        }
    });

    // ------------------------------------------------------------
    // 2. Slideshow functionality
    // ------------------------------------------------------------
    const slides = document.querySelectorAll(".slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    // Show first slide initially
    showSlide(current);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // ------------------------------------------------------------
    // 3. Accordion functionality
    // ------------------------------------------------------------
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach((header) => {
        header.addEventListener("click", () => {
            header.classList.toggle("active-header"); // updated class
            const panel = header.nextElementSibling;
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
    });

    // ------------------------------------------------------------
    // 4. Back to Top button
    // ------------------------------------------------------------
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ------------------------------------------------------------
    // 5. Highlight events on hover
    // ------------------------------------------------------------
    const events = document.querySelectorAll(".event");
    events.forEach((event) => {
        event.addEventListener("mouseover", () => {
            event.style.backgroundColor = "#f0f8ff";
            event.style.transition = "0.3s";
        });
        event.addEventListener("mouseout", () => {
            event.style.backgroundColor = "transparent";
        });
    });
});
