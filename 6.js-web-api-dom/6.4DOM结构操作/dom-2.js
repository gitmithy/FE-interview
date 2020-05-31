const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const newP = document.createElement("p");
newP.innerHTML = "this is p1";

div1.appendChild(newP);

const p1 = document.getElementById("p1");
div2.appendChild(p1);
