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