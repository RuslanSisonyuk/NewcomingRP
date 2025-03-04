// document.getElementById("home-title-div").addEventListener

let page_history=[];

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
         if(page_history[page_history.length-1]!=url)
            page_history.push(url);
      })
      .catch(error => console.error("Failed catching content: ",error));
   }, 600);
});


// $("div").on("click",".pagelinkhome", function(event){
//    event.stopPropagation();
//    event.preventDefault();
//    $("div.nav-item").css("opacity","0");
//    $("div.main-container").css("opacity","0");

//    setTimeout(() => {
//       let url = event.target.getAttribute("href");
//       fetch(url)
//       .then(response=>{
//          if(!response.ok) 
//             throw new Error('Page not found');
//          return response.text();
//       })
//       .then(data => {
//          console.log("success");
//          $("div.nav-item").css("display","none");
//          document.getElementById("main-content").innerHTML = data;
//       })
//       .catch(error => console.error("Failed catching content: ",error));
//    }, 600);
// });

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


$('div').on('click','.dropdown-section',function(){
   $(this).children('p').toggle();
});

$( "div" ).on("click",".pagelink", function(event){
   console.log("Event triggered");
   event.stopPropagation();
   event.preventDefault();
   window.scrollTo({ top: 0, behavior: 'smooth' });

   $('.main-container').css("opacity",'0');
   setTimeout(() => {
      let url = event.target.getAttribute("href");
      console.log(url);
      fetch(url)
      .then(response => {
         if(!response.ok) 
            throw new Error('Page not found');
         return response.text();
      })
      .then(data => {
         document.getElementById("main-content").innerHTML = data;
         if(page_history[page_history.length-1]!=url)
            page_history.push(url);
      })
      .catch(error => {console.error('Error catching content: ',error)});
   }, 800);
});

$('div').on("click","#page-contents-list li a",function(event){
   event.stopPropagation();
   event.preventDefault();
   let element = event.target.getAttribute('href');
   console.log("Scrolling to section.. "+element);
   $('html, body').animate({
      scrollTop: document.getElementById(element).offsetTop
   }, 600);
});

$('div').on("click",".pagelinkhome",function(event){
   event.stopPropagation();
   event.preventDefault();
   let url;
   if(page_history.length>1){
      url = page_history[page_history.length-2];
      console.log(url);
      fetch(url)
      .then(response => {
         if(!response.ok)
         throw new Error("Page not found");
         return response.text();
      })
      .then(data => {
         document.getElementById("main-content").innerHTML = data;
         page_history.pop();
      })
      .catch(error => {console.error('Error catching content: ',error)});
   }
});

$('div').on('click',".infopost-header-sidecard img",function(event){
   let active_image_index = $(this).index()-1;
   let next_image_index = $(this).index();
   if($(".infopost-header-sidecard").children('img').last().index()<=next_image_index) next_image_index=0;

   $(".infopost-header-sidecard").children('img').eq(active_image_index).css("display","none");
   $(".infopost-header-sidecard").children('img').eq(next_image_index).css("display","block");
});