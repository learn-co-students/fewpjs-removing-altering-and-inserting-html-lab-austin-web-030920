// Write your code here!
let main = document.getElementById("main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = 'victory';
document.appendChild(newHeader);
name = "Tsura"
newHeader.innerHTML = `${name} is the champion`;