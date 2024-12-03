let pagelinks = document.querySelectorAll(".pagelink")

pagelinks.forEach(pagelink => {
   pagelink.addEventListener("click", function(event){
      event.stopPropagation();
      event.preventDefault();
      console.log("stop");
   
      document.querySelector('.main-container').style.opacity = "0";
      setTimeout(() => {
         window.location.href=event.target.href;
      }, 600);
   });   
});

