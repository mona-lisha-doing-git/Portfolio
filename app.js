const modal=document.querySelector("#image-modal");
const modalImg=document.querySelector("#modal-img");
const closeBtn=document.querySelector(".close");
const clickableImages=document.querySelectorAll(".clickable-image");

// click operation on all images
clickableImages.forEach(img=>{
    img.addEventListener("click",()=>{
        modal.style.display="block";
        modalImg.src=img.src;
    });
});

// close the modal
closeBtn.onclick=function(){
    modal.style.display="none";
};

// close on clicking outside the image
window.onclick=function(event){
    if(event.target===modal){
        modal.style.display="none";
    }
};

// to add animation of fading out while clicking the home contact button
const contactBtn = document.getElementById("btn2");

contactBtn.addEventListener("click", () => {
    
document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "contact.html";
  }, 600); 
});

// mode-change through icon
// const modeIcon = document.getElementById("mode-icon");

// modeIcon.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   if (modeIcon.classList.contains("fa-moon")) {
//     modeIcon.classList.remove("fa-regular", "fa-moon");
//     modeIcon.classList.add("fa-solid", "fa-sun");
//     modeIcon.style.color = "#04113a";
//   } else {
//     modeIcon.classList.remove("fa-solid", "fa-sun");
//     modeIcon.classList.add("fa-regular", "fa-moon");
//     modeIcon.style.color = "#ffffff";
//   }
// });

const modeIcon = document.getElementById("mode-icon");

// To save mode preference on page load (local storage)
window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("dark-mode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    modeIcon.classList.remove("fa-regular", "fa-moon");
    modeIcon.classList.add("fa-solid", "fa-sun");
    modeIcon.style.color = "#04113a";
  } else {
    document.body.classList.remove("dark-mode");
    modeIcon.classList.remove("fa-solid", "fa-sun");
    modeIcon.classList.add("fa-regular", "fa-moon");
    modeIcon.style.color = "#ffffff";
  }
});

// Toggle mode, mode change through icon
modeIcon.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  localStorage.setItem("dark-mode", isDark); // saving preference

  if (isDark) {
    modeIcon.classList.remove("fa-regular", "fa-moon");
    modeIcon.classList.add("fa-solid", "fa-sun");
    modeIcon.style.color = "#04113a";
  } else {
    modeIcon.classList.remove("fa-solid", "fa-sun");
    modeIcon.classList.add("fa-regular", "fa-moon");
    modeIcon.style.color = "#ffffff";
  }
});
