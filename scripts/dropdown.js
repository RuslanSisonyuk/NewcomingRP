let dropdowns = document.getElementsByClassName("dropdown-section");

// console.log(dropdowns[1].children);


for (let dropdown of dropdowns){
   dropdown.addEventListener("click", function(event){
      console.log(event.target.nodeName);
      if(event.target.nodeName != "DIV") return;
      if(event.target.children[1].style.display != "none") event.target.children[1].style.display = "none";
      else event.target.children[1].style.display = "block";
      // document.querySelector('.main-container').style.opacity = "0";
   });   
}
