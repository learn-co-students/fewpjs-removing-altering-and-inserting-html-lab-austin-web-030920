// find and remove the header
document.querySelector("main#main").remove();

// create h1 and assign it to variable
const newHeader = document.createElement("h1");
// give the h1 an id and content using that variable. 
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";