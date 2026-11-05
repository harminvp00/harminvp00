// click event listner for sidebar appearance
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("toggle-menu");
const menuIcon = document.getElementById("toggle-icon");

// function for open and close menu
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
const downloadButton = document.getElementById("download_cv");
downloadButton.addEventListener("click", dowloadCV);
function dowloadCV() {
  const link = document.createElement("a");
  link.href = "../resume/harmin_vekariya_cv.pdf";
  link.download = "harmin_vekariya_cv.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
/** function for open and close the preview using the JavaScript */
const logoPreview = document.getElementById("logo-preview");
const logo = document.getElementById("logo");
const close = document.getElementById("preview-close");

logo.addEventListener("click", () => {
  logoPreview.style.display = "flex";
});

close.addEventListener("click", () => {
  logoPreview.style.display = "none";
});
