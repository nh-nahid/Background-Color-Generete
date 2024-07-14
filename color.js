const body = document.body;

/**
 * This function generate random number with the range of 0 to 255
 * @returns A random generated number
 */
function generateRandomNumber(){
    return parseInt(Math.random() * 255);
}


/**
 * Generate random RGB color
 * @returns Return RGB color
 */
function generateRGB (){ 
  let rgbColor = "rgb(";
  rgbColor += generateRandomNumber() + ",";
  rgbColor += generateRandomNumber() + ",";
  rgbColor += generateRandomNumber();
  rgbColor += ")";
    return rgbColor;
}

/**
 * The function changes color of various elements
 * @param {HTML Elementk} elements
 */
function changeElementsColor(elements){
    body.style.backgroundColor = generateRGB ();
    elements.style.backgroundColor = generateRGB ();
    elements.style.color = generateRGB ();
    elements.style.borderColor = generateRGB ();
}


/**
 * This function changes background color of HTML body element
 */
function changeBackgroundColor(){
   body.style.backgroundColor = generateRGB ();
}

export default changeElementsColor;