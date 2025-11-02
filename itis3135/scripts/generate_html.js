document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const generateBtn = document.getElementById("generateHTML");

    generateBtn.addEventListener("click", () => {
        const formData = new FormData(form);

   
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

        // Collect multiple courses
        const courses = document.querySelectorAll("#coursesSection .course");
        courses.forEach(course => {
            htmlOutput += `<li>${course.querySelector('input[name="dept"]').value} ${course.querySelector('input[name="number"]').value}: ${course.querySelector('input[name="courseName"]').value} - ${course.querySelector('input[name="reason"]').value}</li>`;
        });

        htmlOutput += `</ul>
    <h3>Extras</h3>
    <p>${formData.get("funnyThing")}</p>
    <p>${formData.get("share")}</p>
    <h3>Links</h3>
    <ul>`;
        
        for (let i = 1; i <= 5; i++) {
            if (formData.get(`link${i}`)) {
                htmlOutput += `<li><a href="${formData.get(`link${i}`)}">${formData.get(`link${i}`)}</a></li>`;
            }
        }

        htmlOutput += `</ul>
</body>
</html>`;

    
        const main = form.parentElement;
        main.innerHTML = `<h2>Introduction HTML</h2>
<pre><code class="html">${htmlOutput.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;

        hljs.highlightAll();
    });
});
