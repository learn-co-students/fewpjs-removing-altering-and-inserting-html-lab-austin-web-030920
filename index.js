// no longer has DOM node 'main#main'
document.getElementById("main").remove();

// has a 'newHeader' variable that points to 'h1#victory'
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Patrick is the champion!"