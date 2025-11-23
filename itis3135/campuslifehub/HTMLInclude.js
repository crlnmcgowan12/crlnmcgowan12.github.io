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
