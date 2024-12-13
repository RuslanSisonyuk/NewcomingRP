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
         $("div.nav-item").css("display","flex");
         $("div.nav-item").css("opacity","1");

         document.getElementById("main-content").innerHTML = data;
      })
      .catch(error => console.error("Failed catching content: ",error));
   }, 600);
});


$("div").on("click",".pagelinkhome", function(event){
   event.stopPropagation();
   event.preventDefault();
   $("div.nav-item").css("opacity","0");
   $("div.main-container").css("opacity","0");

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
         $("div.nav-item").css("display","none");
         document.getElementById("main-content").innerHTML = data;
      })
      .catch(error => console.error("Failed catching content: ",error));
   }, 600);
});

$('div.top-navbar-burgermenu-button').on("click","img",function(event){
   if($('.top-navbar-burgermenu-contents').css("display")=="none"){
      $('#main-content').css("opacity","0");
      setTimeout(() => {
         $('#main-content').css("display","none");
         $('.top-navbar-burgermenu-contents').css("display","flex");
         $('.top-navbar-burgermenu-contents').css("opacity","1");
      }, 600);
   }
   else{
      $('.top-navbar-burgermenu-contents').css("opacity","0");
      setTimeout(() => {
         $('.top-navbar-burgermenu-contents').css("display","none");
         $('#main-content').css("opacity","1");
         $('#main-content').css("display","flex");
      }, 600);
   }
});

$('div.top-navbar-burgermenu-contents').on("click",".burgermenu-pagelink",function(event){
   console.log("success1");
   $('div.top-navbar-burgermenu-contents').css('opacity',"0");
   $('#main-content').css("display","flex");
   setTimeout(() => {
      $('div.top-navbar-burgermenu-contents').css('display',"none");
      $('#main-content').css("opacity","1");
   }, 600);

});