let cards = document.querySelectorAll(".card")

cards.forEach(card => {
   let rand = Math.random()*4-2.5;
   card.style.setProperty('--random_rotation', rand+"deg");
});
