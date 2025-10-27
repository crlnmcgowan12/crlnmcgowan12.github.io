document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const addCourseBtn = document.getElementById("addCourse");
  const clearBtn = document.getElementById("clearButton");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    generateIntro();
  });

  addCourseBtn.addEventListener("click", () => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");
    courseDiv.innerHTML = `
      <label>Department: <input type="text" name="dept" required></label>
      <label>Number: <input type="text" name="number" required></label>
      <label>Name: <input type="text" name="courseName" required></label>
      <label>Reason: <input type="text" name="reason" required></label>
      <button type="button" class="removeCourse">Remove</button>
    `;
    courseDiv.querySelector(".removeCourse").addEventListener("click", () => {
      courseDiv.remove();
    });
    document.getElementById("coursesSection").insertBefore(courseDiv, addCourseBtn);
  });

  clearBtn.addEventListener("click", () => {
    Array.from(form.elements).forEach((el) => {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.value = "";
    });
  });
});

function generateIntro() {
  const form = document.getElementById("introForm");
  const data = new FormData(form);

  // Build intro dynamically
  let html = `
    <h2>Introduction</h2>
    <h3>${data.get("firstName")} ${data.get("lastName")}</h3>
    <p>${data.get("acknowledge")}</p>
  `;

  const pictureFile = form.picture.files[0];
  let imageURL = "../images/optimized_image.jpeg"; // default image
  if (pictureFile) imageURL = URL.createObjectURL(pictureFile);

  html += `
    <img src="${imageURL}" alt="${data.get("picCaption")}" style="width:200px;">
    <p><em>${data.get("picCaption")}</em></p>

    <h4>Personal Background</h4><p>${data.get("personalBackground")}</p>
    <h4>Professional Background</h4><p>${data.get("professionalBackground")}</p>
    <h4>Academic Background</h4><p>${data.get("academicBackground")}</p>
    <h4>Background in this Course</h4><p>${data.get("courseBackground")}</p>
    <h4>Primary Computer Platform</h4><p>${data.get("platform")}</p>

    <h4>Courses I'm Taking</h4>
    <ul>
  `;

  document.querySelectorAll(".course").forEach((courseDiv) => {
    const dept = courseDiv.querySelector("input[name='dept']").value;
    const num = courseDiv.querySelector("input[name='number']").value;
    const name = courseDiv.querySelector("input[name='courseName']").value;
    html += `<li>${dept} ${num} - ${name}</li>`;
  });

  html += `
    </ul>
    <h4>Funny/Interesting Story</h4><p>${data.get("funnyThing")}</p>
    <h4>Something Else to Share</h4><p>${data.get("share")}</p>
    <button id="resetIntro">Reset Form</button>
  `;

  const main = document.querySelector("main");
  main.innerHTML = html;

  document.getElementById("resetIntro").addEventListener("click", () => location.reload());
}
