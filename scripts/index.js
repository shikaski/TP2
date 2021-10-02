const checkbox = document.getElementById("header_check");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
