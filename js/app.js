const toggleBtn = document.getElementById("dark-mode-btn");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
