document.addEventListener("DOMContentLoaded", loadIncludes);

function loadIncludes() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    if (file) {

      const path = file.startsWith("/") ? file : file;
      
      fetch(path)
        .then(response => {
          if (!response.ok) {
            console.error("Error loading HTML fragment:", file, response.statusText);
            throw new Error("File not found: " + file);
          }
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute('data-include');
         
        })
        .catch(error => {
          el.innerHTML = `<span style="color:red;">Failed to load component: ${error.message}</span>`;
        });
    }
  });
}
