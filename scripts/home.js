document.getElementById("home-title-div").addEventListener("click", function(){
   document.getElementById("home-title-div").style.opacity = "0";
   setTimeout(() => {
      document.getElementById("home-title-div").style.display = "none";
      document.getElementById("home-selection-div").style.display = "flex";
   }, 500);
});


document.getElementById("home-lore-link").addEventListener("click", function(){
   document.getElementById("home-selection-div").style.opacity = "0";
   setTimeout(() => {
      window.location.href="lore.html";
   }, 600);
});
document.getElementById("home-about-link").addEventListener("click", function(){
   document.getElementById("home-selection-div").style.opacity = "0";
   setTimeout(() => {
      window.location.href="about.html";
   }, 500);
});
document.getElementById("home-guides-link").addEventListener("click", function(){
   document.getElementById("home-selection-div").style.opacity = "0";
   setTimeout(() => {
      window.location.href="guides.html";
   }, 600);
});
document.getElementById("home-rules-link").addEventListener("click", function(){
   document.getElementById("home-selection-div").style.opacity = "0";
   setTimeout(() => {
      window.location.href="rules.html";
   }, 600);
});
document.getElementById("home-starter-link").addEventListener("click", function(){
   document.getElementById("home-selection-div").style.opacity = "0";
   setTimeout(() => {
      window.location.href="starter_guide.html";
   }, 600);
});
