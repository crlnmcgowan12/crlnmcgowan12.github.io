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
            const linkVal = formData.get(`link${i}`);
            if (linkVal) {
                let linkName = "";
               
