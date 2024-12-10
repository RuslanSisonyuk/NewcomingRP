// let cards = document.querySelectorAll(".card")

// cards.forEach(card => {
// });

$("div").on("click",".card",function(){
   let rand = Math.random()*4-2.5;
   card.style.setProperty('--random_rotation', rand+"deg");
   console.log(rand);
});