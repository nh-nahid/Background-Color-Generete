import changeElementsColor from "./color.js";

const btnClick = document.querySelector(`.btn`);

// Change color after every click
btnClick.addEventListener(`click`, function(){
   changeElementsColor(btnClick)

})

// Generate color on page load
changeElementsColor(btnClick);