const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("toggle-menu");

menu.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});

document.body.addEventListener("click", () => {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } 
});
