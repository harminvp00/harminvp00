// click event listner for sidebar appearance
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("toggle-menu");
const menuIcon = document.getElementById("toggle-icon");
const mediaquey = window.matchMedia("(min-width: 901px)");

// function for open and close menu
menu.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/></svg>`;
  } else {
    sidebar.style.display = "none";
    menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M3,18V16H21v2H3Zm0-5V11H21v2H3ZM3,8V6H21V8H3Z"/></svg>`;
  }
});

// hide sidebar whenever a link is clicked 
const navLinks = document.querySelectorAll(".nav-links");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.display = "none";
    menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M3,18V16H21v2H3Zm0-5V11H21v2H3ZM3,8V6H21V8H3Z"/></svg>`;
  });
});
// Handle the screen resize
mediaquey.addEventListener("change", (event) => {
  if (event.matches) {
    sidebar.style.display = "none";
    menuIcon.src = "../assets/menu.svg";
  }
});

/** Resume download function for the resume */
const downloadButton = document.getElementById("download_cv");
downloadButton.addEventListener("click", dowloadCV);
function dowloadCV() {
  const link = document.createElement("a");
  link.href = "./resume/harmin_vekariya_cv.pdf";
  link.download = "harmin_vekariya_cv.pdf";
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/** function for open and close the preview using the JavaScript */
const logoPreview = document.getElementById("logo-preview");
const close = document.getElementById("preview-close");
const previewImage = document.getElementById("previewImage");
const imageText = document.getElementById("text");

close.addEventListener("click", () => {
  logoPreview.style.display = "none";
});

// Image preview functions, preview method used again
function openPreview(src, text) {
  logoPreview.style.display = "flex";
  previewImage.src = src;
  previewImage.alt = text;
  previewImage.title = text;

  imageText.innerText = text;
}
