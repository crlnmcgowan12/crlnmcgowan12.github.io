document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const jsonBtn = document.getElementById("generateJSON");

    jsonBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        // Collect courses
        const coursesNodeList = document.querySelectorAll("#coursesSection .course");
        const courses = [];
        coursesNodeList.forEach((course) => {
            courses.push({
                department: course.querySelector('input[name="dept"]').value,
                number: course.querySelector('input[name="number"]').value,
                name: course.querySelector('input[name="courseName"]').value,
                reason: course.querySelector('input[name="reason"]').value
            });
        });

        // Collect links
        const links = [];
        for (let i = 1; i <= 5; i++) {
            const href = formData.get(`link${i}`);
            if (href) {
                links.push({ name: `Link ${i}`, href: href });
            }
        }

        // Build JSON object
        const jsonObject = {
            firstName: formData.get("firstName"),
            preferredName: formData.get("nickname") || "",
            middleInitial: formData.get("middleName") || "",
            lastName: formData.get("lastName"),
            divider: formData.get("divider"),
            mascotAdjective: formData.get("mascotAdj"),
            mascotAnimal: formData.get("mascotAnimal"),
            image: "#",
            imageCaption: formData.get("picCaption") || "",
            personalStatement: formData.get("acknowledge") || "",
            personalBackground: formData.get("personalBackground"),
            professionalBackground: formData.get("professionalBackground"),
            academicBackground: formData.get("academicBackground"),
            subjectBackground: formData.get("courseBackground"),
            primaryComputer: formData.get("platform"),
            courses: courses,
            links: links
        };

        const jsonText = JSON.stringify(jsonObject, null, 4);

        const main = form.parentElement;
        main.innerHTML = `<h2>Introduction JSON</h2>
<pre><code class="json">${jsonText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`;

        hljs.highlightAll();
    });
});
