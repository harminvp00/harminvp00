// elements
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("toggle-menu");
const menuIcon = document.getElementById("toggle-icon");
const downloadButton = document.getElementById("download_cv");

// click event listner for sidebar appearance
menu.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    menuIcon.src = "../assets/close.svg";
  } else {
    sidebar.style.display = "none";
    menuIcon.src = "../assets/menu.svg";
  }
});

/** Resume download function for the resume */
downloadButton.addEventListener("click", dowloadCV);
function dowloadCV() {
  const link = document.createElement("a");
  link.href = "../resume/harmin_vekariya_cv.pdf";
  link.download = "harmin_vekariya_cv.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
