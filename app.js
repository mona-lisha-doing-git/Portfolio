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

document.getElementById("btn1").addEventListener("click", function () {
  const password = prompt("Enter password to download the CV:");
  
  if (password === "MySecret123") {
    document.getElementById("cv-link").click();
  } else {
    alert("Incorrect password!");
  }
});

  const contactBtn = document.getElementById("btn2");

  contactBtn.addEventListener("click", () => {
    
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "contact.html";
    }, 600); 
  });
