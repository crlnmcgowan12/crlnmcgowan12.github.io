document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const generateBtn = document.getElementById("generateHTML");

    generateBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior

        const formData = new FormData(form);

        // Start building HTML output
        let htmlOutput = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${formData.get("firstName")} ${formData.get("lastName")} | Introduction</title>
</head>
<body>
    <h2>${formData.get("firstName")} "${formData.get("nickname") || ""}" ${formData.get("lastName")}</h2>
    <figure>
        <img src="#" alt="User uploaded image" />
        <figcaption>${formData.get("picCaption") || ""}</figcaption>
    </figure>
    <ul>
        <li><strong>Personal Background:</strong> ${formData.get("personalBackground")}</li>
        <li><strong>Professional Background:</strong> ${formData.get("professionalBackground")}</li>
        <li><strong>Academic Background:</strong> ${formData.get("academicBackground")}</li>
        <li><strong>Background in this Course:</strong> ${formData.get("courseBackground")}</li>
        <li><strong>Primary Computer Platform:</strong> ${formData.get("platform")}</li>
    </ul>
    <h3>Courses</h3>
    <ul>`;

        // Handle multiple courses
        const courses = document.querySelectorAll("#coursesSection .course");
        courses.forEach((course) => {
            const dept = course.querySelector('input[name="dept"]').value;
            const number = course.querySelector('input[name="number"]').value;
            const name = course.querySelector('input[name="courseName"]').value;
            const reason = course.querySelector('input[name="reason"]').value;

            htmlOutput += `<li>${dept} ${number}: ${name} - ${reason}</li>`;
        });

        htmlOutput += `</ul>
    <h3>Extras</h3>
    <p>${formData.get("funnyThing")}</p>
    <p>${formData.get("share")}</p>
    <h3>Links</h3>
    <ul>`;

        // Handle links
        for (let i = 1; i <= 5; i++) {
            const link = formData.get(`link${i}`);
            if (link) {
                htmlOutput += `<li><a href="${link}">${link}</a></li>`;
            }
        }

        htmlOutput += `</ul>
</body>
</html>`;

        // Replace the form with the HTML code block
        const main = form.parentElement;
        main.innerHTML = `<h2>Introduction HTML</h2>
<pre><code class="html">${htmlOutput.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;

        // Apply Highlight.js syntax highlighting
        hljs.highlightAll();
    });
});
