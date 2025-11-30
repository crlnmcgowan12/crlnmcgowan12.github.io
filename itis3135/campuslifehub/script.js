
document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[data-include]");

    includeElements.forEach(el => {
        const file = el.getAttribute("data-include");
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => el.innerHTML = data)
                .catch(err => console.error("Include error:", err));
        }
    });
});


// ------------------------------------------------------------
// NEW FUNCTIONALITY #1: Accordion for Resources page
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            header.classList.toggle("active");
            const panel = header.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});

// ------------------------------------------------------------
// NEW FUNCTIONALITY #2: "Back to Top" button
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("backToTop");
    if (!button) return;

    window.addEventListener("scroll", () => {
        button.style.display = window.scrollY > 200 ? "block" : "none";
    });

    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// ------------------------------------------------------------
// NEW FUNCTIONALITY #3: Highlight Events on Hover
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event");

    events.forEach(event => {
        event.addEventListener("mouseover", () => {
            event.style.backgroundColor = "#f0f8ff";
            event.style.transition = "0.3s";
        });

        event.addEventListener("mouseout", () => {
            event.style.backgroundColor = "transparent";
        });
    });
});
