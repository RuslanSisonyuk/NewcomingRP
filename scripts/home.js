// document.getElementById("home-title-div").addEventListener
$("div").on("click","#home-title-div", function(){
   document.getElementById("home-title-div").style.opacity = "0";
   setTimeout(() => {
      document.getElementById("home-title-div").style.display = "none";
      document.getElementById("home-selection-div").style.display = "flex";
   }, 500);
});

$("div").on("click",".homepage-link", function(event){
   $("div#home-selection-div").css("opacity","0");
   setTimeout(() => {
      let url = event.target.getAttribute("href");
      fetch(url)
      .then(response=>{
         if(!response.ok) 
            throw new Error('Page not found');
         return response.text();
      })
      .then(data => {
         console.log("success");
         $("div.top-navbar").css("display","flex");
         $("div.top-navbar").css("opacity","1");

         document.getElementById("main-content").innerHTML = data;
      })
      .catch(error => console.error("Failed catching content: ",error));
   }, 600);
});

// document.getElementById("home-lore-link").addEventListener("click", function(){
//    document.getElementById("home-selection-div").style.opacity = "0";
//    setTimeout(() => {
//       fetch("/test.html")
//       .then(response => response.text())
//       .then(data => {
//          document.getElementById("main-content").innerHTML = data;
//       })
//       .catch(err => console.error('Error loading page:', err));
      
//    }, 600);
// });
// document.getElementById("home-about-link").addEventListener("click", function(){
//    document.getElementById("home-selection-div").style.opacity = "0";
//    setTimeout(() => {
//       window.location.href="about.html";
//    }, 500);
// });
// document.getElementById("home-guides-link").addEventListener("click", function(e){
//    document.getElementById("home-selection-div").style.opacity = "0";
//    setTimeout(() => {
//       window.location.href="guides.html";
//    }, 600);
// });
// document.getElementById("home-rules-link").addEventListener("click", function(){
//    document.getElementById("home-selection-div").style.opacity = "0";
//    setTimeout(() => {
//       window.location.href="rules.html";
//    }, 600);
// });
// document.getElementById("home-starter-link").addEventListener("click", function(){
//    document.getElementById("home-selection-div").style.opacity = "0";
//    setTimeout(() => {
//       window.location.href="starter_guide.html";
//    }, 600);
// });

