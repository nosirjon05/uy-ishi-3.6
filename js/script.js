var elForm = document.querySelector(".site-form");
var elInput = elForm.querySelector(".site-input");
var elInputtwo = elForm.querySelector(".site-inputtwo");
var minmoney = 200;

var elP = document.querySelector(".text");

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   if (isNaN(elInputtwo.value)) {
    elP.textContent = `${elInput.value} Son kiriting`;
  } 
  else if (elInputtwo.value < minmoney) {
    elP.textContent = `${elInput.value} Pulingiz yetmadi`;
  }
  else if(elInputtwo.value >= minmoney){
    elP.textContent = `${elInput.value} pullingiz yetdi`;
  }
})